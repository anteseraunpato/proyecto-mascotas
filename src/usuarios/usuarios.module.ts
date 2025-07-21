import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Mascota } from 'src/mascotas/entities/mascota.entity';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module'; // ✅ importar el módulo que exporta el servicio

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Mascota]),
    CloudinaryModule, // ✅ ya exporta CloudinaryService
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService], // 👈🏻 NO vuelvas a declarar CloudinaryService aquí
})
export class UsuariosModule {}
