/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://User7:User7@ds155201.mlab.com:55201/aplwebdemo';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("newCollection").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
