// config/config.js
import dotenv from 'dotenv';
import { dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment variables from .env file in the root directory
dotenv.config({ path: new URL('../../.env', import.meta.url).pathname });

// Resolve __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define configurations for different environments
const config = {
  development: {
    env: 'development',
    port: process.env.PORT || 3200,
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
