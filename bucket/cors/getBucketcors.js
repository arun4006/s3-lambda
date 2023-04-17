const AWS = require('aws-sdk');
const s3=new AWS.S3();


/* The following example enables PUT, POST, and DELETE requests from www.example.com, and enables GET requests from any domain. */

var params = {
    Bucket: "reigns-1", 
}
   s3.deleteBucketCors(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   });