import { Module } from '@nestjs/common';
import { SensoresController } from './sensores.controller';

@Module({
  controllers: [SensoresController],
})
export class SensoresModule {}
