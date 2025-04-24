import dotenv from 'dotenv';
import path from 'path';
import { TEnvConfig } from '../globalTS';

dotenv.config({ path: path.join((process.cwd(), '.env')) });
const envConfig: TEnvConfig = {
  port: process.env.SERVER_PORT,
  database_uri: process.env.MONGODB_URI,
  environment: process.env.NODE_ENVIRONMENT,
  jwt_String: process.env.JWT_SECRET,
  frontEnd_Host_Url: process.env.FRONTEND_HOST_URL
};
export default envConfig;
