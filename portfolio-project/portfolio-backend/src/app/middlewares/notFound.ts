import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  if (!res.headersSent) {
    res.status(404).json({ message: 'Not Found' });
  } else {
    next();
  }
};

export default notFound;
