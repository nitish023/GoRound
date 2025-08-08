# goround/Dockerfile

# Base image with Node.js
FROM node:20

# Set working directory
WORKDIR /app

# Install deps (cached if package.json unchanged)
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port used by React dev server
EXPOSE 3000

# Start the development server
# CMD ["npm", "start"]
