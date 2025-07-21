export class CreateUsuarioDto {

    nombre: string;
    email: string;
    password: string;
    direccion?: string;
    telefono?: string;
    mascotasRegistradas?: number; // IDs de mascotas asociadas
}
