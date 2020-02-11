import { Connection } from 'typeorm';
import { LogEntity } from '../entities';

export const logsProviders = [
  {
    provide: 'LOGS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(LogEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
