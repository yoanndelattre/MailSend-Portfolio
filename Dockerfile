FROM node:alpine
WORKDIR /app
COPY ./app/. .
RUN npm install
EXPOSE $PORT
CMD npm start
