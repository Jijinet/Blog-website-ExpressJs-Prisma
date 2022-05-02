var express = require('express');
var router = express.Router();
const verify=require('./verifyToken');

const {PrismaClient} = require("@prisma/client")

const  prisma  = new PrismaClient()

/* GET articles listing. */
router.get('/',verify, async function(req, res, next) {
  const articles = await prisma.article.findMany({
    include:{ categories:true,commentaires:true}
  });
  res.json(articles);
});


router.get('/:id', async function(req, res, next) {
  // const  id = req.params.id;
  const  {id} = req.params;
  const article = await prisma.article.findUnique({
    where:{
      id : parseInt(id)
    },
  });
  res.json(article);
});



router.post('/',verify, async function(req,res,next){

  const data =req.body;
  const article= await prisma.article.create({data})
  res.json(article);
});



router.delete('/:id',verify,async function(req,res,next){
  const  {id} = req.params;
  const article = await prisma.article.delete
  ({
    where:{
      id : parseInt(id)
    },
  });
  res.json(article);
})


router.patch('/:id',verify,async function(req,res,next){
  const {id} = req.params;
  const data=req.body;
  const article= await prisma.article.update({
    where:{
      id:parseInt(id)
    },
    data:data,
    include:{
      categories:false,
      commentaire:false,
    }
  })
  res.json(article);
})

module.exports = router;
