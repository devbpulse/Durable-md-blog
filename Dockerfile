# Use the official Node.js 16 image as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with retry mechanism
RUN apk add --no-cache --virtual .build-deps alpine-sdk python3 \
    && npm config set registry https://registry.npmjs.org/ \
    && npm install --no-audit --no-fund \
    && apk del .build-deps

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm","run", "dev"]