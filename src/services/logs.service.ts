import {FindManyOptions, Repository} from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';

import {LogEntity} from '../entities';
import {CreateLogModel} from '../models/createLog.model';
import { Log } from '../interfaces/log';

@Injectable()
export class LogsService {
  constructor(
    @Inject('LOGS_REPOSITORY') private readonly logsRepository: Repository<LogEntity>
  ) {}

  async getItemById(id: bigint): Promise<Log | undefined> {
    return await this.logsRepository.findOne({id: id});
  }

  async getMany(options?: FindManyOptions): Promise<Log[]> {
    return await this.logsRepository.find(options);
  }

  async saveLogItem(log: CreateLogModel): Promise<Log> {
    const logEntity = this.logsRepository.create(log);

    return this.logsRepository.save(logEntity);
  }
}
