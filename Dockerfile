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

# Push schema, generate sitemap (DB reachable at runtime), then start app
CMD npx prisma db push --skip-generate && npm run generate-sitemap && npm start
