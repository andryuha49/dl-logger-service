import { createConnection } from 'typeorm';
import { config } from '../config';
import { LogEntity } from '../entities';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      ...config.db,
      entities: [LogEntity]
    }),
  },
];
