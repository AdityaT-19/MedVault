FROM oven/bun:alpine

WORKDIR /usr/src/app/socket

COPY package*.json ./
COPY bun.lockb ./

RUN bun install --frozen-lockfile

COPY ./src /usr/src/app/socket/src

EXPOSE 5000

CMD [ "bun" , "run" , "dev"]