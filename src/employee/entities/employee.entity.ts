import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, type: 'varchar' })
  name: string;

  @Column('varchar')
  firstName: string;

  @Column({
    type: 'date',
  })
  @Index()
  dateCreated: string;

  @Column('varchar')
  department: string;

}
