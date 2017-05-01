'use strict'
import { runGraphQL } from './index';
var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

export const posts = (event,context,cb) => {
    var statusCode = -1;
    var headers = {};
    var body = {};

    console.log("EVENT:", event);

    runGraphQL(event,function(error,response){
        if (error !== null){
            statusCode = 500;
            body = error;
        } else {
            statusCode = 200;
            body = response
        }
    });

    var res = {
        statusCode: statusCode,
        headers: headers,
        body: JSON.stringify(body)
    };
    
    return context.done(JSON.stringify(res));
};