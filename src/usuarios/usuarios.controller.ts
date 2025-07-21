import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile, Patch, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly cloudinaryService: CloudinaryService,
  ) { }

  @Post()
  @UseInterceptors(FileInterceptor('picture'))
  async create(
    @Body() CreateUsuarioDto: CreateUsuarioDto,
    @UploadedFile() picture?: Express.Multer.File,
  ) {
  

    // Subir imagen a Cloudinary si existe
    if (picture) {
      const cloudinaryResponse = await this.cloudinaryService.uploadFile(picture);
      CreateUsuarioDto.picture = cloudinaryResponse.secure_url;
    }

    return this.usuarioService.create(CreateUsuarioDto);
  }


  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('picture'))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateUsuarioDto: UpdateUsuarioDto,
    @UploadedFile() picture?: Express.Multer.File,
  ) {
    // Limpiar el DTO de campos no definidos
    const cleanDto = Object.fromEntries(
      Object.entries(UpdateUsuarioDto).filter(([_, v]) => v !== undefined && v !== null)
    );

    if (picture) {
      const cloudinaryResponse = await this.cloudinaryService.uploadFile(picture);
      cleanDto.picture = cloudinaryResponse.secure_url;
    }

    return this.usuarioService.update(id, cleanDto);
  }



  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usuarioService.remove(+id);
  }
}
