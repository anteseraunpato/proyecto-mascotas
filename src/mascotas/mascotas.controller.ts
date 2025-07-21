import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseIntPipe } from '@nestjs/common';
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
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  async create(
    @Body() createMascotaDto: CreateMascotaDto,
    @UploadedFile() picture?: Express.Multer.File,
  ) {
    // Convertir edad a número
    createMascotaDto.edad = Number(createMascotaDto.edad);

    // Subir imagen a Cloudinary si existe
    if (picture) {
      const cloudinaryResponse = await this.cloudinaryService.uploadFile(picture);
      createMascotaDto.picture = cloudinaryResponse.secure_url;
    }

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
  @UseInterceptors(FileInterceptor('picture'))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMascotaDto: UpdateMascotaDto,
    @UploadedFile() picture?: Express.Multer.File,
  ) {
    // Limpiar el DTO de campos no definidos
    const cleanDto = Object.fromEntries(
      Object.entries(updateMascotaDto).filter(([_, v]) => v !== undefined && v !== null)
    );

    if (picture) {
      const cloudinaryResponse = await this.cloudinaryService.uploadFile(picture);
      cleanDto.picture = cloudinaryResponse.secure_url;
    }

    return this.mascotasService.update(id, cleanDto);
  }



  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.mascotasService.remove(+id);
  }
}