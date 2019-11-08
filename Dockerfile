FROM node:11-alpine

WORKDIR /app

copy . .
RUN npm install

EXPOSE 8000

CMD ["node","index"]

