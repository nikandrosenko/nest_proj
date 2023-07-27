import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum requestStatusEnum {
  PENDING = 'В ожидании',
  APPROVED = 'Утверждена',
  DONE = 'Выполнена',
}

@Entity()
export class Request {
  @ApiProperty({
    minimum: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: requestStatusEnum,
    default: requestStatusEnum.PENDING,
  })
  status: requestStatusEnum;

  @ManyToOne(() => User, (user) => user.requests)
  user: User;

  @ManyToOne(() => Animal, (animal) => animal.requests)
  animal: Animal;

  @ApiProperty()
  @Column({
    type: 'datetime',
  })
  created_at: Date;

  @ApiProperty()
  @Column({
    type: 'datetime',
  })
  changed_at: Date;
}
