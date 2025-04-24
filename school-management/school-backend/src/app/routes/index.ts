import { Router } from 'express';
import authRouter from '../module/auth/user.router';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: authRouter
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
