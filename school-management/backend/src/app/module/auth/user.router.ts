import express from 'express';
import { userSignin, userSignup } from './user.controller';

const authRouter = express.Router();

authRouter.route('/auth/signup').post(userSignup);
authRouter.route('/auth/signin').post(userSignin);

export default authRouter;

// user authenticate with auth middleware: hint
// userRouter
//   .route('/services/slots')
//   .post(authMiddleware, isAuthenticate(['admin']), createSlots);


