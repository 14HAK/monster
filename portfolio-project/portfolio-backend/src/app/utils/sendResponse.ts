/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

const sendResponse = async <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data?: T
): Promise<any> => {
  if (!res.headersSent) {
    res.status(statusCode).json({
      success,
      message,
      data: data
    });
  }
};

export default sendResponse;

// Example Usage: hint
// const productResponse = sendResponse(res, 200, true, "Product retrieved", { id: 101 });
// sendResponse(res, 200, true, 'Hello message!');
