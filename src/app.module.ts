import { Module } from '@nestjs/common';
import { SensoresModule } from './sensores/sensores.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Mascota } from './mascotas/entities/mascota.entity';

@Module({ 
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.1.106',
      port: 3306,
      username: 'root',
      password: '17082009',
      database: 'huellaapp',
      entities:[Usuario,Mascota],
      synchronize: true,
    })
    ,SensoresModule, MascotasModule, UsuariosModule],
})
export class AppModule {}
