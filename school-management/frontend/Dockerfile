FROM node:20-alpine3.18
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 5173
CMD ["yarn", "dev"]
# docker build -t school-frontend .
