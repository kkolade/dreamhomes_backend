// Express import
import express from 'express';

// Dependencies modules
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import errorHandler from './middlewares/errorMiddleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// app.use('/api', taskRoutes);

// Error Handler
app.use(errorHandler);

export default app;
