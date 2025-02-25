import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import envConfig from './app/config';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import sendResponse from './app/utils/sendResponse';

const app: Application = express();
const frontend: string = envConfig?.frontEnd_Host_Url as string;

app.use(express.json());
app.use(
  cors({
    origin: [frontend],
    credentials: true
  })
);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log({
    path: req.path,
    method: req.method,
    strick: new Date().toLocaleString()
  });
  sendResponse(res, 200, true, 'Hello World!');
  next();
});

app.use('/api/v1', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
