FROM node:20 AS builder

WORKDIR /usr/src/app
COPY . .
RUN yarn set version 4.5.0
RUN yarn install
RUN yarn build

FROM node:20-alpine AS production

WORKDIR /usr/src/app

RUN yarn set version 4.5.0

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /user/src/app/server.js .
EXPOSE 3000

CMD ["node","server.js"]
