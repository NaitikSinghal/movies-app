# Use a base image that includes Node.js
FROM node:14
# Set up the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application files into the container
COPY . .
# Set environment variable for port
ENV PORT=8000
# Expose port 8000 to access the React application
EXPOSE 8000
# Command to start the development server
CMD ["npm", "start"]