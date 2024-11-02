# Use an official Node.js image
FROM node:14

# Create the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application code
COPY service1.js .

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["node", "service1.js"]
