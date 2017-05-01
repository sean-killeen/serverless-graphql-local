import { graphql } from 'graphql';
import schema from './Schema';

export function runGraphQL(event,cb){
    let query = event.query;
    console.log("RUNGRAPHQL:", event);
    console.log("QUERY:", query);
        graphql(schema,query).then(function(error,result){
            console.log("RESULT: ",result);
            return cb(error,result);
        }).catch(function(error){
            console.log("ERROR:",error);
            return cb(error);
        });

}
