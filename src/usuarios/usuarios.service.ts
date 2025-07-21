import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async create(CreateUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(CreateUsuarioDto);
    return await this.usuarioRepository.save(usuario); // Guarda todo (incluyendo picture)
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOneBy({ id });
  }

  async update(id: number, updateusuarioDto: UpdateUsuarioDto) {
  // Validar que el ID sea un número válido
  if (isNaN(id)) {
    throw new Error('ID de usuario inválido');
  }

  // Limpiar el DTO de valores undefined/null
  const cleanDto = Object.fromEntries(
    Object.entries(updateusuarioDto).filter(([_
, v]) => v !== undefined && v !== null)
  );

  await this.usuarioRepository.update(id, cleanDto);
  return this.usuarioRepository.findOneBy({ id });
}

  async remove(id: number) {
    return await this.usuarioRepository.delete(id);
  }
}
