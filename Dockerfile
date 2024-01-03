# Switch to the Node.js Lambda runtime image
FROM public.ecr.aws/lambda/nodejs:18 as builder

# Set the working directory in the builder image
WORKDIR /app

# Copy the entire application code
COPY . .

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
