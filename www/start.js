import dotenv from 'dotenv';

import config from '../app/config/config.js';
import connectDB from '../app/config/database.js';
import app from '../app/server.js';

dotenv.config();

// Connect to database and start the server
connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(
      `Server started and running on port ${config.port}` +
        '\nPress ctrl+C to terminate'
    );
  });
});
