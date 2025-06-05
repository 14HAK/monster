import { z } from 'zod';

const UserZodSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['admin', 'student', 'teacher'])
});

export default UserZodSchema;
