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

    @Column()
    caracteristicas: string;

    @Column()
    edad: number;

    @Column({ nullable: true })
    gpsId?: number;

    @Column({ nullable: true })
    picture?: string;
    
}
