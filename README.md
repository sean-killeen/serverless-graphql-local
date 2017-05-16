# serverless-graphql-local
A serverless graphql blog that runs locally against a DynamoDb instance.

## Install DynamoDB Locally

Download DynamoDB from [here](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)

Extract the contents of the .zip file into `c:\dynamodb_local`

In a terminal, run the database using:

    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar

You can check that the database is installed and running by browsing to:
    
    http://localhost:8000/shell/


## Install App Dependencies

In a terminal, browse to the App folder:

    npm i
    npm i serverless -g

## Test the App locally

To build the app for local use:

    webpack --output-filename app.js

Run it using:

    node app.js

Once this process starts you can browse to `http://localhost:5000/` to see the GraphiQL interface.  This will allow you to query the local schema and DynamoDB instance.

Note that the port is configurable in `index.js`

## Seed Some Data Locally

There are scripts included under local/seed to create data for local testing.
Execute them using:

    node create_table.js
    node insert_items.js

You can clear out data also:

    node clear_items.js


## Sample Query



## Deploy the App

To deploy the app to AWS you will need an aws account.

    Serverless deploy // sls deploy will also work





