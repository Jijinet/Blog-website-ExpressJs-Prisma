var express = require('express');
var router = express.Router();

const {PrismaClient} = require("@prisma/client")

const  prisma  = new PrismaClient()

const bcrypt=require('bcryptjs')

const {loginValidation} = require('../validation/validation');



router.get('/', async function(req, res, next) {

    //? VALIDER LA CREATION DE L'UTILISATEUR 
  const {error}=loginValidation(req.body);

  if(error) return res.status(400).send(error.details[0].message)

    //? SELECTIONNER L'UTILISATEUR
  const users = await prisma.user.findUnique({
    where: {
        email: req.body.email,
        password:req.body.password
      },
  });


    //? VERIFIER QUE L'UTILISATEUR N'EXISTE PAS
    const emailExist= await prisma.user.findUnique({
        where: {
          email: req.body.email
        },
       select: {
         email: true
      }
      })
      if(!emailExist)return res.status(400).send('email doesnt exist')


    //? VERIFIER LE MOT DE PASSE
      const validPass= bcrypt.compareSync(req.body.password,users.password);
      if(!validPass)return res.status(400).send('Invalid password')
  
  res.send('you are successfuly logged in')
});






module.exports = router;
