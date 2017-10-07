/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://abc123:111111a@ds157584.mlab.com:57584/yuxi'; //mongodb://<dbuser>:<dbpassword>@ds155091.mlab.com:55091/<dbname>

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected correctly to server");
    db.close();
});