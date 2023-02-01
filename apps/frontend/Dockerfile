FROM nginx:alpine

RUN apk add --no-cache bash

COPY ./apps/frontend/src /usr/share/nginx/html

COPY ./apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf
