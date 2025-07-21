export class CreateMascotaDto {
    nombre: string;
    raza: string;
    color: string;
    caracteristicas?: string;
    especie: string;
    sexo: string;
    gpsId?: string;
    edad: number;
    picture?: string;
}
