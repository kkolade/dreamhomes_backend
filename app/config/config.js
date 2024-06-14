import dotenv from 'dotenv';
import { dirname, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '../../.env');

dotenv.config({ path: envPath });

// Define configurations for different environments
const config = {
  development: {
    env: 'development',
    port: process.env.PORT || 8200,
    dir: {
      root: __dirname,
      static: `${__dirname}${sep}${process.env.STATIC_DIR}${sep}`,
      public: `${__dirname}${sep}${process.env.PUBLIC_DIR}${sep}`,
      views: `${__dirname}${sep}${process.env.VIEWS_DIR}${sep}`,
    },
    db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      name: process.env.DB_NAME,
      uri: process.env.DB_URI,
    },
    jwtSecret: process.env.JWT_SECRET,
  },
  production: {
    env: 'production',
    port: process.env.PORT || 8000,
    dir: {
      root: __dirname,
      static: `${__dirname}${sep}${process.env.STATIC_DIR}${sep}`,
      public: `${__dirname}${sep}${process.env.PUBLIC_DIR}${sep}`,
      views: `${__dirname}${sep}${process.env.VIEWS_DIR}${sep}`,
    },
    db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      name: process.env.DB_NAME,
    },
    jwtSecret: process.env.JWT_SECRET,
  },
  test: {
    env: 'test',
    port: process.env.PORT || 4000,
    dir: {
      root: __dirname,
      static: `${__dirname}${sep}${process.env.STATIC_DIR}${sep}`,
      public: `${__dirname}${sep}${process.env.PUBLIC_DIR}${sep}`,
      views: `${__dirname}${sep}${process.env.VIEWS_DIR}${sep}`,
    },
    db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      name: process.env.DB_NAME,
    },
    jwtSecret: process.env.JWT_SECRET,
  },
};

// Export the configuration for the current environment
const currentConfig = config[process.env.NODE_ENV] || config.development;

export default currentConfig;
