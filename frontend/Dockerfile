FROM node:latest

RUN mkdir -p /app/frontend

WORKDIR /app/frontend 

COPY package.json /app/frontend

RUN yarn install

COPY . /app/frontend/

EXPOSE 3000

CMD ["yarn", "start"]
