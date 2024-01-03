# Use Ubuntu 20.04 as the base image
FROM ubuntu:20.04

# Set the working directory in the base image
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install build-essential and Node.js dependencies
RUN apt-get update && \
    apt-get install -y build-essential && \
    apt-get install -y nodejs npm

# Install better-sqlite3 and other Node.js dependencies
RUN npm install -g node-gyp && \
    npm install better-sqlite3 --build-from-source

# Switch to the Node.js Lambda runtime image
FROM public.ecr.aws/lambda/nodejs:18 as builder

# Set the working directory in the builder image
WORKDIR /app

# Copy the entire application code
COPY . .

# Install Python
RUN apt-get update && \
    apt-get install -y python3

# Set the PYTHON environment variable
ENV PYTHON /usr/bin/python3

# Install Node.js dependencies
RUN npm install

# Run the yarn develop command (modify if needed)
RUN yarn develop

# Switch to the final Lambda runtime image
FROM public.ecr.aws/lambda/nodejs:18

# Set the working directory in the final image
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy the application code from the builder image
COPY --from=builder /app/ ./

# Define the command to run your Lambda function
CMD ["./src/app.strapiHandler"]
