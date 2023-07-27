import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './entities/request.entity';
import * as moment from 'moment';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private repository: Repository<Request>,
  ) {}
  create(data: CreateRequestDto) {
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

  update(id: number, data: UpdateRequestDto) {
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
