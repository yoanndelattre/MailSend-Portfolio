FROM node:alpine as builder
WORKDIR /app
COPY ./app .
RUN npm install
EXPOSE $PORT
CMD ["node", "index.js"]