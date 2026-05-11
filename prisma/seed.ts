import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcrypt";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const nezumi = await prisma.user.create({
    data: {
      name: "Nezumikun",
      email: "nezumikun@yandex.ru",
      role: "ADMIN",
      password: await bcrypt.hash("123456", 10),
      fullName: "Кожевников Алексей"
    },
  });
  console.log(`Created user: ${nezumi.name}`);
  const nr = await prisma.user.create({
    data: {
      name: "Незарегистрированный",
      email: "not@registered",
      password: "",
      role: "SYSTEM",
      fullName: "Незарегистрированный пользователь"
    },
  });
  console.log(`Created user: ${nr.name}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });