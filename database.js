var mongoose = require('mongoose');

const {ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://tearsfury:40045052339hF@cluster0.x0g8t.mongodb.net/Web-Odev";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
var conn = mongoose.connection;
conn.on('connected', async function () {
    console.log('database is   successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = mongoose;
