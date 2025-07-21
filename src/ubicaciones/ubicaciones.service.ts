import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';

@Injectable()
export class UbicacionesService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepo: Repository<Ubicacion>,
  ) {}

  create(createUbicacionDto: CreateUbicacionDto) {
    const nuevaUbicacion = this.ubicacionRepo.create(createUbicacionDto);
    return this.ubicacionRepo.save(nuevaUbicacion);
  }

  findAll() {
    return this.ubicacionRepo.find({ order: { fecha: 'DESC' } });
  }
}
