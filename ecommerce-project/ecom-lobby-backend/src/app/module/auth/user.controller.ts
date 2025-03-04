import { NextFunction, Request, Response } from 'express';
import { AnyObject } from 'mongoose';
import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import { signupUser } from './user.service';
import { findUserByEmail, passwordCompare, tokenProvider } from './user.utils';
import UserZodSchema from './user.validation';

export const userSignup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const rawData = await req.body;
    const isValidData = await UserZodSchema.parseAsync(rawData);

    const result = await signupUser(isValidData);
    if (!result) {
      return next(new AppError('data created unsuccessful', 501));
    }

    await sendResponse(res, 201, true, 'User registered successfully', result);
  }
);

export const userSignin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // req.body coming properly. {email, password}
    const rawData = await req?.body;
    const { email, password } = rawData;

    const user: AnyObject | null = await findUserByEmail(email);
    if (!user) {
      return next(new AppError('No Data Found', 404));
    }

    const verifyPassword = await passwordCompare(password, user.password);
    if (!verifyPassword) {
      return next(new AppError('Invalid Credentials password', 400));
    }

    const token = await tokenProvider(rawData);
    if (!token) {
      return next(new AppError('Invalid Credentials token', 400));
    }

    // const stringToken = JSON.stringify(jwtToken);
    res.set('Authorization', `Bearer ${token}`);
    await sendResponse(res, 200, true, 'User signIn successfully', user);
  }
);
