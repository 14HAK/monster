import { Document } from 'mongoose';

export interface TUSER extends Document {
  email: string;
  password: string;
  role: 'admin' | 'student' | 'teacher';
  isMarried: boolean;
  documents: [string, number, boolean];
  spaceCode: 1255;
}

const user: TUSER = {
  email: 'example@gmail.com',
  password: '#######',
  role: 'student',
  isMarried: true,
  documents: ['star', 36, false],
  spaceCode: 1255
};
