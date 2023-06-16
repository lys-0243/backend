import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import("@adminjs/prisma")
import * as AdminJSPrisma from '@adminjs/prisma';
import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime';

const prisma = new PrismaClient();

AdminJS.registerAdapter({
  Resource: AdminJSPrisma.Resource,
  Database: AdminJSPrisma.Database,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
