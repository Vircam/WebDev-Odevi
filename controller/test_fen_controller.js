const fetchModel = require("../models/fen_model");
const userModel = require("../models/user_model");
userModel.createData(function (data) {
    console.log(data);
})
