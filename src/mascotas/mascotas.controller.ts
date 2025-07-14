import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Post()
  async create(@Body() createMascotaDto: CreateMascotaDto) {
    return await this.mascotasService.create(createMascotaDto);
  }

  @Get()
  async findAll() {
    return await this.mascotasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.mascotasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateMascotaDto: UpdateMascotaDto) {
    return await this.mascotasService.update(id, updateMascotaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.mascotasService.remove(id);
  }
}
