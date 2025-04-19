FROM node:18-alpine

WORKDIR /app

# Install git and other dependencies
RUN apk add --no-cache git openssh

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript code
RUN npm run build

# Command to run the worker
CMD ["node", "dist/index.js"] 