import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { DatabaseModule } from './db/database.module';
import { LogsService } from './services/logs.service';
import { logsProviders } from './providers/logs.providers';
import { LogsController } from './controllers/logs.controller';
import { OdataLogsMiddleware } from './middlewares/odataLogs.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [
    LogsController
  ],
  providers: [
    ...logsProviders,
    LogsService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(OdataLogsMiddleware)
      .forRoutes('v1/odata/logs');
  }
}
