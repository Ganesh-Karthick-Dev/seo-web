FROM node:22-alpine

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

# Push database schema on container start, then start the app
CMD npx prisma db push --skip-generate && npm start
