import { z } from "zod";

const UserZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["admin", "user"]),
});

export default UserZodSchema;
