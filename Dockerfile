FROM amazon/aws-lambda-nodejs:18
WORKDIR /app
RUN npm i python3
COPY . .
RUN npm install sqlite3
RUN npm install
RUN chmod -R 755 /var/task
CMD [ "/app/src/app.strapiHandler" ]