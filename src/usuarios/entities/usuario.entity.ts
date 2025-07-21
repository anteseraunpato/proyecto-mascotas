import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    direccion?: string;

    @Column()
    telefono?: string;

    @Column({ nullable: true })
    mascotasRegistradas?: number;
}

