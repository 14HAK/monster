import jwt from 'jsonwebtoken';
import envConfig from '../../config';
import { PartialUser, TUSER } from './user.interface';
import User from './user.model';

export const findUserByEmail = async (email: string): Promise<TUSER | null> => {
  const userExist = await User.findOne({ email });
  return userExist;
};

export const passwordCompare = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = User.comparePassword(password, hashedPassword);
  return isMatch;
};

export const tokenProvider = async (data: PartialUser): Promise<string> => {
  const payload = { ...data };
  const secret = envConfig?.jwt_String;
  const options: jwt.SignOptions = { expiresIn: '1h', algorithm: 'HS256' };

  const token = jwt.sign(payload, secret as string, options);

  return token;
};
