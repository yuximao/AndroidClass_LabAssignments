/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://abc123:111111a@ds157584.mlab.com:57584/yuxi';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropCollection("newCollection", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});