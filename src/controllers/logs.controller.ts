import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';

import { LogsService } from '../services/logs.service';
import { CreateLogModel } from '../models/createLog.model';
import { Log } from '../interfaces/log';

@Controller('/v1/logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  getAll() {
    throw new HttpException('Use /v1/odata/logs endpoint instead.', HttpStatus.BAD_REQUEST);
  }

  @Get('/:id')
  getById(@Param('id') id: bigint): Promise<Log> {
    return this.logsService.getItemById(id);
  }

  @Post()
  async createLog(@Body() log: CreateLogModel): Promise<{id: bigint}> {
    const entity = await this.logsService.saveLogItem(log);
    return {id: entity.id};
  }
}
