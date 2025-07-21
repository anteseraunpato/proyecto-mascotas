import { PartialType } from '@nestjs/mapped-types';
import { CreateMascotaDto } from './create-mascota.dto';
import { IsOptional } from 'class-validator';

export class UpdateMascotaDto extends PartialType(CreateMascotaDto) {
    @IsOptional() nombre?: string;
    @IsOptional() raza?: string;
    @IsOptional() especie?: string;
    @IsOptional() color?: string;
    @IsOptional() sexo?: string;
    @IsOptional() caracteristicas?: string; // Solo este campo para características
    @IsOptional() edad?: number;
    @IsOptional() gpsId?: string;
    @IsOptional() picture?: string;

}
