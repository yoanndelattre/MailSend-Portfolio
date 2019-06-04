FROM node:alpine as builder
COPY ./app /app
WORKDIR /app
RUN npm install

FROM gcr.io/distroless/nodejs
COPY --from=builder /app /app
WORKDIR /app
EXPOSE $PORT
CMD ["index.js"]