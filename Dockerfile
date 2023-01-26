FROM node:alpine

COPY ./package.json /dist/package.json
COPY ./dist /dist

WORKDIR /dist

RUN npm install

ENTRYPOINT ["node", "./node_modules/.bin/cucumber-js"]