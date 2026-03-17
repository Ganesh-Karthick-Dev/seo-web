FROM node:22-alpine

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Generate Prisma client
RUN npx prisma generate


RUN npm run build

EXPOSE 3000

# Apply tracked Prisma migrations, then start app
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
