FROM node:11-alpine

WORKDIR /app

copy . .
RUN npm install

EXPOSE 6060

CMD ["node","index"]

