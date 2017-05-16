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

You will aslo need to add the following environment variables to your machine:

    NODE_ENV = DEV   

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

    cd local/seed
    node create_table.js
    node insert_items.js

You can clear out data also:

    node clear_items.js


## Sample Query

Browse to:

    http://localhost:5000/

In GraphiQL, enter:
```
query {
    posts {
        id
    }
}
```

you should see the following results:

```
{
  "data": {
    "posts": [
      {
        "id": "1"
      },
      {
        "id": "4"
      },
      {
        "id": "3"
      },
      {
        "id": "5"
      },
      {
        "id": "2"
      }
    ]
  }
}
```


## Deploy the App

To deploy the app to AWS you will need an aws account.  You can configure your AWS credentials using the following command:

     serverless config  credentials --provider aws --key <ACCESS KEY ID> --secret <SECRET ACCESS KEY>

You will aslo need to add the following environment variables to your machine:

    AWS_ACCESS_KEY_ID = <ACCESS KEY ID> 
    AWS_SECRET_ACCESS_KEY = <SECRET ACCESS KEY>

Once this has been done, you should be able to deploy:

    serverless deploy





