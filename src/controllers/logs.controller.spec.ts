import { Test, TestingModule } from '@nestjs/testing';

import { LogsService } from '../services/logs.service';
import { LogsController } from './logs.controller';
import { logsProviders } from '../providers/logs.providers';
import { DatabaseModule } from '../db/database.module';

describe('LogsController', () => {
  let appController: LogsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [LogsController],
      providers: [
        ...logsProviders,
        LogsService
      ],
    }).compile();

    appController = app.get<LogsController>(LogsController);
  });

  describe('root', () => {
    it('should return exception', async () => {
      let message = null;
      try {
        await appController.getAll()
      } catch (e) {
        message = e.message
      }
      expect(message).toBe('Use /v1/odata/logs endpoint instead.');
    });
  });
});
