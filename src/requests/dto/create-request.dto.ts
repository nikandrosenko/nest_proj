import { ApiProperty } from '@nestjs/swagger';
import { requestStatusEnum } from '../entities/request.entity';
import { Animal } from 'src/animals/entities/animal.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateRequestDto {
  @ApiProperty({
    description: 'ID заявки',
  })
  id: number;

  @ApiProperty({
    description: 'Название заявки',
  })
  title: string;

  @ApiProperty({
    description: 'Описание заявки',
  })
  description: string;

  @ApiProperty({
    enum: ['В ожидании', 'Утверждена', 'Выполнена'],
    description: 'Статус заявки',
  })
  status: requestStatusEnum;
  @ApiProperty({
    description: 'Id автора заявки',
  })
  user: User;
  @ApiProperty({
    description: 'Id выбранного животного',
  })
  animal: Animal;
  @ApiProperty({
    description: 'Дата создания заявки',
  })
  created_at: Date;
  @ApiProperty({
    description: 'Дата обновления заявки',
  })
  changed_at: Date;
}
