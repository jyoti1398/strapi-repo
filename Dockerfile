# FROM amazon/aws-lambda-nodejs:18
# WORKDIR /app
# RUN npm i python3
# COPY . .
# RUN ldd --version
# # RUN npm install sqlite3
# RUN npm install --build-from-resource
# RUN chmod -R 755 /var/task
# CMD [ "/app/src/app.strapiHandler" ]

# First stage: Build dependencies with a base image that includes GLIBC
# FROM balenalib/amd64-ubuntu:bionic AS builder

# WORKDIR /app
# COPY package*.json yarn.lock ./
# RUN ldd --version
# RUN apt-get update && apt-get install -y nodejs
# RUN npm install
# COPY . .
# RUN npm i python3
# RUN npm install

# Second stage: Use a Node.js 18 base image
FROM amazon/aws-lambda-nodejs:18
WORKDIR /app
COPY package*.json yarn.lock ./
RUN ldd --version
RUN apt-get update && apt-get install -y nodejs
RUN npm install
COPY . .
RUN npm i python3
RUN npm install

WORKDIR /app
COPY --from=builder /app .

# Provide the handler script
COPY src/app.strapiHandler .

# Command to run the application
CMD [ "yarn", "develop" ]
