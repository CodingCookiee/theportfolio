FROM node:23-alpine3.20

# Set working directory
WORKDIR /app

# Increase Node's memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build with increased memory allocation
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Expose port 8800
EXPOSE 8800

# Start the app
CMD ["npm", "run", "preview", "--", "--host", "--port", "8800"]

