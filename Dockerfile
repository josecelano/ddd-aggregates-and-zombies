FROM node:lts-alpine3.13 as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install 

COPY . .

RUN yarn test:coverage && yarn build

FROM node:lts-alpine3.13 as app

COPY --from=builder /usr/src/app/lib /usr/src/app

WORKDIR /usr/src/app

CMD ["node", "index.js"]