
FROM node:alpine

WORKDIR /app

COPY . /app/

RUN npm i

EXPOSE 3001

CMD ["npm", "run", "dev"]