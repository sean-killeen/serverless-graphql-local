var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "eu-west-1",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing posts into DynamoDB. Please wait.");

var allPosts = JSON.parse(fs.readFileSync('./seed_data.json', 'utf8'));
allPosts.forEach(function(post) {
    var params = {
        TableName: "Posts",
        Item: {
            "id": post.id,
            "title": post.title,
            "bodyContent": post.bodyContent,
            "author": post.author
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add post", post.title, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", post.title);
       }
    });
});