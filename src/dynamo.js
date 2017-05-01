import Promise from 'bluebird';
import AWS from 'aws-sdk';
if (process.env.DEV){
    AWS.config.update({
        sessionToken: process.env.AWS_SESSION_TOKEN,
        region: "eu-west-1",
        endpoint: "http://localhost:8000"
    });
}
else{
    AWS.config.update({
        sessionToken: process.env.AWS_SESSION_TOKEN,
        region: process.env.AWS_REGION
    });
}

const docClient = new AWS.DynamoDB.DocumentClient();
const stage = "dev";
const projectName = "blog-poc";
const postsTable = "Posts"


export function getPosts(){
    return new Promise(function(resolve,reject){
        var params= {
            TableName: postsTable
        }
        docClient.scan(params, function(err,data){
            if(err){
                console.log("DB ERROR:", err)
                return reject(err);
            } 
            return resolve(data["Items"]);
        });
    });

}