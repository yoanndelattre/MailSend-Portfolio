FROM node:alpine
RUN mkdir /app
RUN chmod -R 777 /app
WORKDIR /app
COPY ./app/. .
RUN npm install
EXPOSE $PORT
CMD npm start
