# Use Node.js 22 LTS (Jod) - Alpine for smaller image size
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the default port (adjust as needed)
EXPOSE 3000

# Default command
CMD ["npm", "start"]
