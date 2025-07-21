import { IsNumber } from "class-validator";


export class CreateUbicacionDto {
  @IsNumber()
  latitud: number;

  @IsNumber()
  longitud: number;
}
