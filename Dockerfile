FROM amazon/aws-lambda-nodejs:18
WORKDIR /app
RUN npm i python3
COPY . .
RUN ldd --version
# RUN npm install sqlite3
RUN npm install --build-from-resource
RUN chmod -R 755 /var/task
CMD [ "/app/src/app.strapiHandler" ]