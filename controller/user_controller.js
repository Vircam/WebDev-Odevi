const user=require("../models/user_model");
const {MongoClient, ServerApiVersion} = require("mongodb");
const uri = "mongodb+srv://tearsfury:40045052339hF@cluster0.x0g8t.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    console.log("bağlantı geldi");
    user.find({user_name:"huzeyfe"},(err,data)=>{
        console.log(err,data)
    });
});
