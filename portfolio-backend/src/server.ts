/* eslint-disable @typescript-eslint/no-explicit-any */

import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import configEnv from './app/config/index';
import AppError from './app/errors/AppError';

let server: Server;

async function main() {
  try {
    await mongoose.connect(configEnv?.database_uri as string);
    mongoose.set('strictPopulate', false);
    console.log('mongoose mongoDB connection successfully!');

    server = app.listen(configEnv?.port, () =>
      console.log(
        `server listening on port: http://localhost:${configEnv?.port}`
      )
    );
  } catch (err: any) {
    if (err) throw new AppError('mongoose connection failed!', 500);
  }
}
main();

// Handling unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  server.close(() => {
    process.exit(1);
  });
});

// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  server.close(() => {
    process.exit(1);
  });
});
