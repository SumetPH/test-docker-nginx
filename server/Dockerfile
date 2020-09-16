FROM node:12-alpine as builder

RUN mkdir -p /app/server
WORKDIR /app/server
COPY . .

WORKDIR /app/server/client
RUN yarn install
RUN yarn build

WORKDIR /app/server
RUN yarn install


EXPOSE 8000
CMD [ "yarn", "start" ]