# Dockerfile - large credit to https://medium.com/@pvasu3658/guide-to-dockerizing-and-deploying-your-vite-react-app-8ed6eaca002e

# Step 1: Use a Node.js image to build the app
FROM node:22-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Build the app
RUN npm run build


# Step 2: Use an Nginx image to serve the static files
FROM nginx:alpine AS production

# Copy the build files from the builder stage to the Nginx web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]