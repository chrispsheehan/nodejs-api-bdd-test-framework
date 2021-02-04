FROM node:alpine
COPY ./src ./
RUN npm install
ENTRYPOINT ["node", "./node_modules/.bin/cucumber-js"]