FROM node:lts-alpine

WORKDIR /app

ENV PORT=3333

EXPOSE ${PORT}

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express --production

COPY ./dist/apps/api .

RUN pwd
RUN ls -la

CMD ["node", "main"]


