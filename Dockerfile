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

RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "serve", "dist" , "--spa" , "--port", "3000"]
