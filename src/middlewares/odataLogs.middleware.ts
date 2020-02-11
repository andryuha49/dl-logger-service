import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { odataQuery } from 'odata-v4-typeorm';
import { Repository } from 'typeorm';

import { LogEntity } from '../entities';

@Injectable()
export class OdataLogsMiddleware implements NestMiddleware {
  constructor(
    @Inject('LOGS_REPOSITORY') private readonly logsRepository: Repository<LogEntity>
  ) {}

  use(req: Request, res: Response, next: Function) {
    odataQuery(this.logsRepository)(req, res, next);
  }
}
