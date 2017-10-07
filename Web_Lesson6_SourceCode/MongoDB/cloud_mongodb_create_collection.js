/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://abc123:111111a@ds157584.mlab.com:57584/yuxi';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
