import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['deviceId'])
export class Dispositivo {
@PrimaryGeneratedColumn()
id: number;

@Column()
deviceId:string;
}
