# Use a base image that includes Node.js
FROM node:11
# Set up the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application files into the container
COPY . .
# Expose port 3000 for the Express server
EXPOSE 3000
# Command to start the server
CMD ["node", "index.js"]