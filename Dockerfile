FROM public.ecr.aws/lambda/nodejs:18 as builder
WORKDIR /app
COPY . .
RUN ls 
# Install Python
RUN apt update && apt-get install -y python3

# Set the PYTHON environment variable
ENV PYTHON /usr/bin/python3

RUN npm install
RUN yarn develop

FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /app/ ./
CMD ["./src/app.strapiHandler"]