# Use an official Node.js image
FROM node:14

# Create the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy the rest of the application code
COPY service1.js /usr/src/app/

# Expose port 8199 to the outside world
EXPOSE 8199

# Run the app
CMD ["npm", "start"]
