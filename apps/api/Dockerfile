# syntax = docker/dockerfile:1.0-experimental

FROM node:lts-alpine as development
#has about 1.8gb
WORKDIR /usr/src/app

COPY . .

FROM node:16-alpine as installer

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --only=production

FROM node:16-alpine as builder

WORKDIR /usr/src/app

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

COPY --from=installer /usr/src/app/node_modules ./node_modules

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g nx@latest

COPY . .

RUN nx run api:build:development

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=installer /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

ENV PORT=3333
EXPOSE ${PORT}

ENV DEBUG_PORT=9229
EXPOSE ${DEBUG_PORT}

CMD ["node", "dist/apps/api/main"]
