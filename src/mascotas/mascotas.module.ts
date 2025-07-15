import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Mascota } from './entities/mascota.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({imports: [TypeOrmModule.forFeature([Usuario,Mascota])],// Add your imports here if needed
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}
