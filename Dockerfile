FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client and push schema to database
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

# Push database schema on container start, then start the app
CMD npx prisma db push --skip-generate && npm start
