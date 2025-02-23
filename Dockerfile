FROM node:18.17.1-alpine  # Or your preferred Node.js version

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["serve", "-s", "build", "-l", "3000"] # Example for serving the build (adjust as needed)
