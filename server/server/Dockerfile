FROM oven/bun:alpine

WORKDIR /usr/src/app/server

COPY package*.json ./
COPY bun.lockb ./

RUN bun install --frozen-lockfile

COPY ./src /usr/src/app/server/src
COPY ./firebaseConfig.ts /usr/src/app/server/firebaseConfig.ts
COPY ./google-services.json /usr/src/app/server/google-services.json
COPY ./secretAccountKey.json /usr/src/app/server/secretAccountKey.json

EXPOSE 3000

CMD [ "bun" , "run" , "dev"]