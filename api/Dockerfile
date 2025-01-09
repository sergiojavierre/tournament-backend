# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install
# Instala ts-node globalmente (opcional, pero recomendado para contenedores)
RUN npm install -g typescript ts-node

# Copy the rest of the app source code to the working directory
COPY . .

# Expose the port that the app will listen on
EXPOSE 8080

# Start the app
CMD ["npx", "ts-node", "src/index.ts"]