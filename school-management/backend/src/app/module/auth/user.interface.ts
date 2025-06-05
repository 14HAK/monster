import { Document, Model } from 'mongoose';

export interface TUSER extends Document {
  email: string;
  password: string;
  role: 'admin' | 'student' | 'teacher';
}

export interface UserModel extends Model<TUSER> {
  comparePassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

export interface DecodedToken {
  user: string;
  iat: number;
  exp: number;
}

export type PartialUser = Partial<TUSER>;
