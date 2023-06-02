FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

RUN npm prune --production

CMD ["npm", "start"]