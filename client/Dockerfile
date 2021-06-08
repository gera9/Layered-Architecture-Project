# Stage 1
FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app


COPY client/package.json /app

RUN npm install

COPY ./client /app

RUN npm run build --prod

# Stage 2
FROM nginx:1.20-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-step /app/dist/client /usr/share/nginx/html