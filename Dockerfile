FROM ubuntu:20.04
# Set the working directory in the builder image
WORKDIR /app

# Copy the entire application code
COPY . .

RUN apt-get update && \
    apt-get install -y build-essential && \
    apt-get install -y nodejs npm python3

ENV PYTHON /usr/bin/python3

# Install Node.js dependencies
RUN npm install
RUN npm i better-sqlite3

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
