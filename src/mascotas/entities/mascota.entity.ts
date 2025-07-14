import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    especie: string;

    @Column()
    sexo: string;

    @Column()
    edad: number;
}
