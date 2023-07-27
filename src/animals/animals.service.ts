import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import * as moment from 'moment';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private repository: Repository<Animal>,
  ) {}
  create(data: CreateAnimalDto) {
    return this.repository.save({
      ...data,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      changed_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateAnimalDto) {
    return this.repository.save({
      ...data,
      id,
      changed_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
