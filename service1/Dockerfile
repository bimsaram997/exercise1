# Use official Node.js image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy application code
COPY service1.js /usr/src/app/

# Expose port 8199 for Service1
EXPOSE 8199

# Start the application
CMD ["node", "service1.js"]
