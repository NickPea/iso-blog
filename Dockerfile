FROM node

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run clean:build

CMD npm run start:server