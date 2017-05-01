'use strict';

import { runGralQL } from './src/index';

var ServerlessHelpers = require('serverless-helpers-js').loadEnv();

export const handler = (event, context,cb) => {
    
    var parsedBody = JSON.parse(event.body);
    runGralQL(event.body, function(error,response){
        if ( error !== null ){
            var resp = {
                statusCode: 500,
                headers:{},
                body: error
            },
        } else{
            var resp = {
                statusCode: 200,
                headers:{},
                body: response
            },
        }
        cb(context.done(error,response));
    });
    
};