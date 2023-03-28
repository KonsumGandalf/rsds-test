FROM node:lts-alpine as development

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nx@latest

CMD nx run frontend:serve:development --host=0.0.0.0 --poll 500

FROM node:16-alpine as builder

WORKDIR /usr/src/app

ARG NPM_TOKEN
ENV NPM_TOKEN=$NPM_TOKEN

COPY package.json ./
COPY package-lock.json ./

RUN npm ci
RUN npm install -g nx

COPY . .

RUN nx build frontend -c development

FROM nginx:1.22-alpine

WORKDIR /usr/src/app

COPY ./apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/apps/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
