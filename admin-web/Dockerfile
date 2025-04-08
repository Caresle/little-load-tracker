# Build the app
FROM node:20-alpine3.21 AS builder

# ENV VARIABLES
ARG SALT
ARG DB_PASSWORD
ARG DB_USERNAME
ARG DB_DATABASE
ARG DB_PORT
ARG NEXT_PUBLIC_API_URL

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build:nolint

# STEP 2: Run the app

FROM node:20-alpine3.21 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]