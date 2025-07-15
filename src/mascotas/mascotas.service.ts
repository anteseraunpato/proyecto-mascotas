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
    ){
  
    }
  async create(createMascotaDto: CreateMascotaDto) {
    return await this.mascotaRepository.save(createMascotaDto);
  }

  async findAll() {
    return await this.mascotaRepository.find();
  }

  async findOne(id: number) {
    return await this.mascotaRepository.findOneBy({ id });
  }

  async update(id: number, updateMascotaDto: UpdateMascotaDto) {
    return await this.mascotaRepository.update(id, updateMascotaDto);
  }

  async remove(id: number) {
    return await this.mascotaRepository.delete(id);
  }
}
