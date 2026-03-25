import 'dotenv/config'; // Isso aqui garante que o process.env.DATABASE_URL não seja mais 'undefined'
import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL,
  },
});