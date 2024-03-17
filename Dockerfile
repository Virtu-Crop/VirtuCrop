# Use a Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app/Backend

# Copy package.json and package-lock.json for backend
COPY Backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY . .

# Build backend (if necessary)
# RUN npm run build (if applicable)
CMD ["npm", "start"]

# Set working directory for frontend
WORKDIR /app/Frontend

# Copy package.json and package-lock.json for frontend
COPY MainWebsite/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source code
COPY MainWebsite .

# Expose backend port
EXPOSE 3000

# Expose frontend port
EXPOSE 3001

# Start both backend and frontend
CMD ['npm','run','dev']
