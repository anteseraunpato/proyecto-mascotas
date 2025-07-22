import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ubicacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float')
  latitud: number;

  @Column('float')
  longitud: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}

