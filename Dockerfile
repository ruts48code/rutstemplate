FROM node:22 as build 
WORKDIR /app
COPY package.json ./
COPY svelte.config.js ./
COPY vite.config.js ./
COPY src ./src
COPY static ./static
RUN yarn
RUN yarn build

FROM node:22 as polka
WORKDIR /app
COPY package.json ./
RUN yarn --production

FROM node:22-slim
WORKDIR /app
COPY web.js ./
COPY --from=build /app/build ./build
COPY package.json ./
COPY --from=polka /app/node_modules ./node_modules

EXPOSE 80
ENTRYPOINT ["node"]
CMD ["web.js"]
