# develop stage
FROM node:16.16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install @quasar/cli
COPY . .

RUN quasar build
# production stage
FROM nginx:1.23.0-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]