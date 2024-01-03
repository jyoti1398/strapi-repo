FROM public.ecr.aws/lambda/nodejs:16 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN yarn develop

FROM public.ecr.aws/lambda/nodejs:16
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /app/ ./
CMD ["./src/app.strapiHandler"]