import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dispositivo } from './entities/dispositivo.entity';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';

@Injectable()
export class DispositivosService {
  constructor(
    @InjectRepository(Dispositivo)
    private dispositivoRepository: Repository<Dispositivo>,
  ) {}

  async createOrGet(deviceId: string) {
    // Verificar si ya existe
    const existente = await this.dispositivoRepository.findOne({ 
      where: { deviceId } 
    });

    if (existente) {
      return existente; // Si existe, retornarlo
    }

    // Si no existe, crea uno nuevo
     const nuevo = this.dispositivoRepository.create({ deviceId });
    return await this.dispositivoRepository.save(nuevo);
  }

  findAll() {
    return this.dispositivoRepository.find();
  }

  findOne(id: number) {
    return this.dispositivoRepository.findOne({ where: { id } });
  }

  async findOneByDeviceId(deviceId: string) {
    return await this.dispositivoRepository.findOne({ where: { deviceId } });
  }

  async update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
    await this.dispositivoRepository.update(id, updateDispositivoDto);
    return this.dispositivoRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const result = await this.dispositivoRepository.delete(id);
    return typeof result.affected === 'number' && result.affected > 0;
  }
}