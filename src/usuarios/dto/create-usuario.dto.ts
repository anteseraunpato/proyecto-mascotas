export class CreateUsuarioDto {

    nombre: string;
    email: string;
    password: string;
    direccion?: string;
    telefono?: string;
    picture?:string; // IDs de mascotas asociadas
}
