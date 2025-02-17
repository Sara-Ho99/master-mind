const { PrismaClient } = require("@prisma/client"); // need CommonJS to run node scripts

const database = new PrismaClient();

async function setCat() {
  try {
    await database.category.createMany({
      data: [
        { name: "HTML" },
        { name: "SASS" },
        { name: "Tailwind" },
        { name: "Javascript" },
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Next.js" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

setCat();
