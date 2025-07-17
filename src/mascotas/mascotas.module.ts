import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Mascota } from './entities/mascota.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CloudinaryProvider } from 'src/cloudinary/cloudinary.provider';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({imports: [TypeOrmModule.forFeature([Usuario,Mascota]),CloudinaryModule],// Add your imports here if needed
  controllers: [MascotasController],
  providers: [MascotasService,CloudinaryProvider,CloudinaryService],
})
export class MascotasModule {}
