import { Column, Entity, IsNull, PrimaryGeneratedColumn,  } from "typeorm";

@Entity()
export class CheckEmployee {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  employee_id: number

  @Column('datetime')
  check_in: Date

  @Column({
    type: 'datetime',
    nullable: true
  })
  check_out: Date

  @Column({
    type: 'float',
    default: 0
  })
  duration: number

  @Column('text')
  comment: string
}
