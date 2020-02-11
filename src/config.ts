import * as convict from 'convict';
import * as fs from 'fs';

const defaultConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'node_env'
  },
  // The API HTTP config.
  api: {
    ip: {
      doc: 'The IP address to bind.',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'IP_ADDRESS',
    },
    port: {
      doc: 'The port to bind.',
      format: 'port',
      default: 3001,
      env: 'PORT',
      arg: 'port'
    }
  },

  logger: {

  },

  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'localhost',
      env: 'DB_HOST'
    },
    port: {
      doc: 'Database port number',
      format: Number,
      default: 5432,
      env: 'DB_PORT'
    },
    database: {
      doc: 'Database name',
      format: String,
      default: 'logger',
      env: 'DB_DATABASE'
    },
    username: {
      doc: 'Connection user name',
      format: String,
      default: 'postgres',
      env: 'DB_USERNAME'
    },
    password: {
      doc: 'Connection user password',
      format: String,
      default: 'q1w2e3R4',
      env: 'DB_PASSWORD'
    },
    name: {
      doc: 'Connection name',
      format: String,
      default: 'default'
    },
    type: {
      doc: 'Connection type',
      format: String,
      default: 'postgres'
    },
    synchronize: {
      doc: 'Connection synchronize type',
      format: Boolean,
      default: true
    },
    migrationsRun: {
      doc: 'Run migrations',
      format: Boolean,
      default: true
    },
    autoSchemaSync: {
      doc: 'Auto schema sync',
      format: Boolean,
      default: true
    },
    logging: {
      doc: 'Enable logging',
      format: Boolean,
      default: false,
      env: 'DB_LOGGING'
    }
  }
});

// Load environment dependent configuration
const env = defaultConfig.get('env');
const configFileName = `./config.${env}.json`;
if (fs.existsSync(configFileName)) {
  defaultConfig.loadFile(configFileName);
}

// Perform validation
defaultConfig.validate({allowed: 'strict'});

const config = defaultConfig.get();

export {config};
