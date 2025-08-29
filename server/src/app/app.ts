import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import os from 'os';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import { taskRoute } from './modules/task/task.route';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  const currentDateTime = new Date().toISOString();
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const serverHostname = os.hostname();
  const serverPlatform = os.platform();
  const serverUptime = os.uptime();

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Welcome to the Task Manager API ',
    version: '1.0.0',
    clientDetails: {
      ipAddress: clientIp,
      accessedAt: currentDateTime,
    },
    serverDetails: {
      hostname: serverHostname,
      platform: serverPlatform,
      uptime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor((serverUptime / 60) % 60)} minutes`,
    },
    developerContact: {
      email: 'mrshakilhossain@outlook.com',
      website: 'https://shakil-tawny.vercel.app',
    },
  });
});

// Application Routes

app.use('/api/tasks', taskRoute);

// Global Error Handler
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
