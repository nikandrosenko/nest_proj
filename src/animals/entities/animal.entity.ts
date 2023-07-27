import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Request } from 'src/requests/entities/request.entity';

export enum animalTypeEnum {
  ANIMAL = 'Животное',
  CAT = 'Кот',
  DOG = 'Собака',
}

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    type: 'enum',
    enum: animalTypeEnum,
    default: animalTypeEnum.ANIMAL,
  })
  format: animalTypeEnum;

  @OneToMany(() => Request, (request) => request.animal)
  requests: Request[];

  //   @ApiProperty()
  @Column({
    type: 'datetime',
  })
  created_at: Date;

  //   @ApiProperty()
  @Column({
    type: 'datetime',
  })
  changed_at: Date;
}
