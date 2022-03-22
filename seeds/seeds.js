const {faker} = require("@faker-js/faker");


const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const randomNum=Math.floor(Math.random()*20)


const categories = Array.from({length:10}).map(()=>({

    nom: faker.name.jobArea()    
    
}))



const commentaires = Array.from({length:20}).map(()=>({

  email:faker.internet.email(),
  content:faker.lorem.paragraph()

}))


const articles = Array.from({length:100}).map(()=>({

    titre:faker.name.title(),
    content:faker.lorem.text(),
    image:faker.image.abstract(),
    

}))


const users = Array.from({length:10}).map(()=>({

  nom: faker.name.firstName(),
  email:faker.internet.email(),
  password:faker.internet.password(20),
  role:"AUTHOR"

}))




async function main() {

    await prisma.category.createMany({

        data:categories
    })

    await prisma.article.createMany({

      data:articles
    })

   await prisma.user.createMany({
    data:users
  })

  await prisma.commentaire.createMany({

    data:commentaires
  })

  await prisma.user.create({

    data:{
      nom: faker.name.firstName(),
      email:faker.internet.email(),
      password:faker.internet.password(20),
      role:"ADMIN"
    }
    
  })


}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })