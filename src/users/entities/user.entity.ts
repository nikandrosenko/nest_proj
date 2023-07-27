import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Request } from 'src/requests/entities/request.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];

  @Column({ default: false })
  is_admin: boolean;

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
