import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascota)
    private mascotaRepository: Repository<Mascota>,
  ) { }

  async create(createMascotaDto: CreateMascotaDto) {
    const mascota = this.mascotaRepository.create(createMascotaDto);
    return await this.mascotaRepository.save(mascota); // Guarda todo (incluyendo picture)
  }

  async findAll() {
    return await this.mascotaRepository.find();
  }

  async findOne(id: number) {
    return await this.mascotaRepository.findOneBy({ id });
  }

  async update(id: number, updateMascotaDto: UpdateMascotaDto) {
  // Validar que el ID sea un número válido
  if (isNaN(id)) {
    throw new Error('ID de mascota inválido');
  }

  // Limpiar el DTO de valores undefined/null
  const cleanDto = Object.fromEntries(
    Object.entries(updateMascotaDto).filter(([_
, v]) => v !== undefined && v !== null)
  );

  await this.mascotaRepository.update(id, cleanDto);
  return this.mascotaRepository.findOneBy({ id });
}

  async remove(id: number) {
    return await this.mascotaRepository.delete(id);
  }
}
