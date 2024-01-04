# Builder stage
FROM amazon/aws-lambda-nodejs:18 AS builder

WORKDIR /app
COPY package*.json yarn.lock ./
RUN npm install

# Main stage
FROM amazon/aws-lambda-nodejs:18 

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY package*.json yarn.lock ./

# No need to run npm install here

COPY . .

# Your additional commands
RUN npm i python3
RUN yarn develop


# Command to run the application
CMD [ "src/app.strapiHandler" ]
