import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express'; // 👈 Importa esto
import { SensoresModule } from './sensores/sensores.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Mascota } from './mascotas/entities/mascota.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import * as multer from 'multer'; // 👈 También importa multer directamente
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.68.125',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'huellapp',
      entities:[Usuario,Mascota],
      synchronize: true,
    }),

    // 👇 Importar Multer con memoryStorage
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),

    SensoresModule,
    MascotasModule,
    UsuariosModule,
    CloudinaryModule,
  ],
  controllers: [AppController,],
  providers: [AppService,AppController],
}
)
export class AppModule {}
