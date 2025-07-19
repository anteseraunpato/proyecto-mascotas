import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Controller('mascotas')
export class MascotasController {
  constructor(
    private readonly mascotasService: MascotasService,
    private readonly cloudinaryService: CloudinaryService, 
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('picture')) // 'picture' debe coincidir con el campo en FormData

  async create(
    @Body() createMascotaDto: CreateMascotaDto,
    @UploadedFile() picture?: Express.Multer.File,
  ) {
    // Subir imagen a Cloudinary y obtener URL
    const cloudinaryResponse = picture ? await this.cloudinaryService.uploadFile(picture) : { secure_url: '' };
    createMascotaDto.picture = cloudinaryResponse.secure_url; // Asignar URL al DTO

    // Guardar en la base de datos (incluyendo la URL)
    return this.mascotasService.create(createMascotaDto);
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
  async update(
    @Param('id') id: string,
    @Body() updateMascotaDto: UpdateMascotaDto,
  ) {
    return await this.mascotasService.update(+id, updateMascotaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.mascotasService.remove(+id);
  }
}