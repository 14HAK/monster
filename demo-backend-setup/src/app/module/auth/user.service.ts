import { TUSER } from './user.interface';
import User from './user.model';

export const signupUser = async (data: Partial<TUSER>) => {
  const result = await User.create(data);
  return result;
};
