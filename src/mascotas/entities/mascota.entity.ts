import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    raza: string;

    @Column()
    especie: string;

    @Column()
    color: string;

    @Column()
    sexo: string;

    @Column({ nullable: true })
    caracteristicas: string;

    @Column()
    edad: number;

    @Column({ nullable: true, type: 'varchar' }) // Cambiado a string
    gpsId?: string;

    @Column({ nullable: true })
    picture?: string;
    
}
