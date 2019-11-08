FROM node:11-alpine

WORKDIR /app

copy . .
RUN npm install

EXPOSE 8080

CMD ["node","index"]

