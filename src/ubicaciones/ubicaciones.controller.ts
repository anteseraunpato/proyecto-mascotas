import { Controller, Post, Body, Get } from '@nestjs/common';
import { UbicacionesService } from './ubicaciones.service';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';

@Controller('ubicaciones')
export class UbicacionesController {
  constructor(private readonly ubicacionesService: UbicacionesService) {}

  @Post()
  create(@Body() dto: CreateUbicacionDto) {
    return this.ubicacionesService.create(dto);
  }

  @Get()
  findAll() {
    return this.ubicacionesService.findAll();
  }
}
