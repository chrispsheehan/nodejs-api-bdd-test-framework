FROM node:alpine

COPY ./package.json /src/package.json
COPY ./src /src

WORKDIR /src

RUN npm install

ENTRYPOINT ["node", "./node_modules/.bin/cucumber-js"]