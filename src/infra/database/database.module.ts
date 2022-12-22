import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PrismaService],
})
export class DatabaseModule {}
