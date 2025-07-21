import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { UbicacionesService } from './ubicaciones.service';
import { UbicacionesController } from './ubicaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ubicacion])],
  controllers: [UbicacionesController],
  providers: [UbicacionesService],
})
export class UbicacionesModule {}
