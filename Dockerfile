FROM node:alpine

COPY ./package.json /dist/package.json
COPY ./dist /dist

WORKDIR /dist

RUN yarn

ENTRYPOINT ["node", "./node_modules/.bin/cucumber-js"]