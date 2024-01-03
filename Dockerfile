# Builder stage
FROM ubuntu:18.04

FROM public.ecr.aws/lambda/nodejs:18 as builder
WORKDIR /app
COPY . .
RUN ls 
RUN apt-get update && apt-get install -y build-essential
RUN npm install -g node-gyp
RUN npm install better-sqlite3 --build-from-source
# Install Python
RUN apt-get i -y python3 
# Set the PYTHON environment variable
ENV PYTHON /usr/bin/python3

RUN npm install
RUN yarn develop

FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /app/ ./
CMD ["./src/app.strapiHandler"]