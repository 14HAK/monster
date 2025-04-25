//todo How To Work This Docker Image:__
//* 1. build this Docker compose MERN Stack react project Docker Image:__
// folder structure:
docker-compose-mern/
├── frontend
├── backend
├── compose.yaml
├── Dockerfile
├── instruction.js
├── ... ... ...

// docker-compose-mern/Dockerfile:
FROM node:20-alpine3.18
WORKDIR /app
COPY . .

// Docker Image Build:
"-> docker build -t <docker_img_name> ."
"-> docker build -t docker-compose-mern ."
// push this compose project image into hub:
// direct push image
'-> docker login' // login to docker hub
'-> docker tag <image_name> <user_Name>/<image_name>' // tag the image with user name
'-> docker tag docker-compose-mern dulon88/docker-compose-mern'

'-> docker push <user_Name>/<image_name>' // push the image to docker hub
'-> docker push dulon88/docker-compose-mern'

//* 2. pull this image from Docker hub:__
"-> docker pull dulon88/docker-compose-mern"

//* 3. pull then open it from local dir:__
"-> docker run -dit --name <container-name> <your-image-name>"
"-> docker run -dit --name my-container dulon88/docker-compose-mern"

"-> docker cp docker-compose-mern:/app ./docker-compose-mern"
"-> cd docker-compose-mern"

// * 4. conclusion:__
// now you can run this project as a mern stack docker compose.
// build, rebuild, repush, new push, ita won you hand, enjoy!
// this is also an image and also an MERN stack docker compose project after using commands.
"-> docker-compose up -d --build" // build the project
"-> docker-compose up -d" // run the project

"-> docker-compose up --build"
"-> docker-compose up"


