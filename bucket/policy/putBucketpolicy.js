const AWS = require('aws-sdk');
const s3=new AWS.S3();

var params = {
    Bucket: "reigns-1" }
//     Policy:`{
//         "Version": "2012-10-17",
//         "Statement": [
//           {
//             "Effect": "Allow",
//             "Principal": "*",
//             "Action": [
//               "s3:GetObject"
//             ],
//             "Resource": "arn:aws:s3:::reigns-1/*"
//           }
//         ]
//       }`
//    };

   s3.deleteBucketPolicy(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
   });
  

  