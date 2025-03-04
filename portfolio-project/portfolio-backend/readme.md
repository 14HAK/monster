<img src="./_assets/backend.png" alt="isolated" width="full" style="margin: 0 auto;"/>

# Demo Backend System Design

## **Version:** 1.0.0

## 24-Jan-2025.

```javascript
Author: Dulon Mahadi Molla
Affiliation: Student Of CSE.
Location: Narayanganj, Casara- Dhaka.
```

# Project Setup :

- Clone This Project From Here : [Github](https://github.com/14HAK/monster.git)

```javascript
yarn
yarn dev // check package.json: script
```

# .env :

```javascript
SERVER_PORT = '8000'
MONGODB_URI = 'mongodb+srv://<db_username>:<db_password>@cluster10.hju5h.mongodb.net/<database_name>?'
NODE_ENVIRONMENT = 'development'
JWT_SECRET = 'your_secret_here'
FRONTEND_HOST_URL = 'http://localhost:5173/'
```

# Project Folder Structure :

```javascript
Backend-System-Design/

├── src/ 📂

│ ├── app/ 📂

│ └── app.ts 📄
│ └── server.ts 📄

├── package.json 📄
├── yarn.lock 📄

└── tsconfig.json 📄
└── eslint.config.mjs 📄

├── .env 📄
├── .gitignore 📄
└── .prettierignore 📄
└── readme.md 📄
```

# Project Overview :

```javascript
project system overview [like description of project roadmap]

1. web apps system instruction.
```

# API Endpoints :

### main route path :

```javascript
app.use('/api/v1', router);
```

### Create User & Authentication :

```javascript
authRouter
    .route('/auth/signup')
    .post(userSignup);

authRouter
  .route('/auth/signin')
  .post(userSignin);

// with authentication and authorization:
userRouter
  .route('/services/user')
  .get(authMiddleware, isAuthenticate(['admin']), getUsers);
```

# Packages [ typeScript and yarn environment ] :

express / typeScript / bcrypt/ cors/ dotenv / mongoose / jsonwebtoken /
http-status / ts-node-dev / zod / eslint / prettier /
