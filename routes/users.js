var express = require('express');
var router = express.Router();

const {PrismaClient} = require("@prisma/client")

const  prisma  = new PrismaClient()

const bcrypt=require('bcryptjs')

const {registerValidation} = require('../validation/validation');
const {loginValidation} = require('../validation/validation');

const jwt= require('jsonwebtoken');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await prisma.user.findMany({
    include:{ articles:true}
  });
  res.json(users);
});


router.get('/:id', async function(req, res, next) {
  // const  id = req.params.id;
  const  {id} = req.params;
  const user = await prisma.user.findUnique({
    where:{
      id : parseInt(id)
    },
  });
  res.json(user);
});



router.post('/register', async function(req,res,next){

  //? VALIDER LA CREATION DE L'UTILISATEUR 
  const {error}=registerValidation(req.body);

  if(error) return res.status(400).send(error.details[0].message)

  //? VERIFIER QUE L'UTILISATEUR DEJA EXISTE
  const emailExist= await prisma.user.findUnique({
    where: {
      email: req.body.email
    },
   select: {
     email: true
  }
  })
  if(emailExist)return res.status(400).send('email already exist')

  //? CRYPTER LE MOT DE PASSE
  const salt=bcrypt.genSaltSync(10);
  const hashPassword=bcrypt.hashSync(req.body.password,salt);


  const data = {
    nom:req.body.nom,
    email:req.body.email,
    password:hashPassword,
    role:req.body.role
  }


  //? CREER UN UTILISATEUR
  try {
    const user= await prisma.user.create({data})
  res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
  
});


router.post('/login', async function(req, res, next) {

  //? VALIDER LA CREATION DE L'UTILISATEUR 
const {error}=loginValidation(req.body);

if(error) return res.status(400).send(error.details[0].message)

  //? SELECTIONNER L'UTILISATEUR
  const users= await prisma.user.findUnique({
      where: {
        email: req.body.email
      }
    })
      //? VERIFIER QUE L'UTILISATEUR N'EXISTE PAS
    if(!users)return res.status(400).send('email doesnt exist')


  //? VERIFIER LE MOT DE PASSE
    const validPass= bcrypt.compareSync(req.body.password,users.password);
    if(!validPass)return res.status(400).send('Invalid password');

    //? CREER LE WEB TOKEN
    const token = jwt.sign({_id:users.id},process.env.TOKEN_SECRET)
    res.header('auth-token',token).send(token);
});



router.delete('/:id',async function(req,res,next){
  const  {id} = req.params;
  const user = await prisma.user.delete
  ({
    where:{
      id : parseInt(id)
    },
  });
  res.json(user);
})


router.patch('/:id',async function(req,res,next){
  const {id} = req.params;
  const data=req.body;
  const user= await prisma.user.update({
    where:{
      id:parseInt(id)
    },
    data:data,
    include:{
      articles:false,
    }
  })
  res.json(user);
})

module.exports = router;
