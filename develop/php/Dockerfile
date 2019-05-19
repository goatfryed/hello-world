FROM php:7.3-fpm-alpine
RUN apk update \
    && apk add bash \
    && apk add postgresql-dev \
    && rm -rf /var/cache/apk/*
RUN docker-php-ext-install -j$(nproc) pdo_pgsql