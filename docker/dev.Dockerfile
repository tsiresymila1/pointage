FROM node:14.16

WORKDIR /home/api

COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY . .
EXPOSE 3000

CMD ["npm", "run", "start:dev"]
