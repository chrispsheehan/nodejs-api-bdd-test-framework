FROM node:alpine
COPY ./src ./
RUN npm install
CMD ["npm", "run", "start"]