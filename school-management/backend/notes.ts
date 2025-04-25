// //---------------------nodeMailer send email functionality utils manage
// //* USER FORGAT_PASSWORD && RESET_PASSWORD:::
// //* utils/sendEmail.ts::
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendEmail = async (to: string, subject: string, text: string) => {
//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   });
// };

// //---------------------User generate Reset-token functionality
// //* utils/generateTokens.ts::
// import jwt from 'jsonwebtoken';

// interface TPAYLOAD {
//   email: string;
//   password: string;
//   role: 'admin' | 'user';
// }

// const RESET_SECRET = process.env.JWT_RESET_SECRET as string;

// //reset token function
// const generateResetToken = async (payload: TPAYLOAD) => {
//   const { email, password, role } = payload;

//   return Promise.resolve(
//     jwt.sign({ email, password, role }, RESET_SECRET, { expiresIn: '15m' })
//   );
// };

// //---------------------user Forgat Password Controller
// //* user.controller.ts::
// //forgat password function
// import express, { Request, Response, NextFunction } from 'express';

// const forgotPassword = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { email } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return next(new AppError('User does not exist', 400));

//     const resetPasswordToken = await generateResetToken(user);

//     user.resetPasswordToken = resetPasswordToken;
//     user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes,
//     await user.save();

//     const resetURL = `http://localhost:3000/reset-password?token=${	resetPasswordToken}`;

//     await sendEmail(
//       email,
//       'Password Reset',
//       `Please use this link to reset your password: ${	resetURL}`
//     );

//     res.status(200).json({ message: 'Password reset link sent to your email' });
//   }
// );

// //---------------------User Reset Token verification
// //* user.controller.ts::
// // reset password
// const RESET_SECRET = process.env.JWT_RESET_SECRET as string;

// export const resetPassword = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { -resetPasswordToken, newPassword } = req.body;

//     const decoded = jwt.verify(-resetPasswordToken, RESET_SECRET) as {
//       email: string;
//       password: string;
//       role: 'admin' | 'user';
//     };
//     if (!decoded) return next(new AppError('Token verification failed', 400));

//     const { email } = decoded;

//     const user = await User.findOne({
//       email: email,
//       resetPasswordToken: -resetPasswordToken,
//       resetPasswordExpires: { $-gt: new Date() },
//     });
//     if (!user) return next(new AppError('Invalid or expired token', 400));

//     user.password = newPassword;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//     await user.save();

//     res.status(200).json({ message: 'Password has been reset' });
//   }
// );

// //---------------------User forgat && reset password routes handler
// //* user.routes.ts::
// //router request:
// import express, { Router } from 'express';

// const userRouter: Router = express.Router();
// userRouter.post('/forgot-password', forgotPassword);
// userRouter.post('/reset-password', resetPassword);
