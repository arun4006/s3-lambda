const AWS = require('aws-sdk');
const s3=new AWS.S3();

var params = {Bucket: 'reigns-1', Key: 'db_model.png'};
var url = s3.getSignedUrl('getObject', params);
console.log('The URL is', url);
  