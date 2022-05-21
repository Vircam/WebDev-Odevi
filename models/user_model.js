const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
let userSchema = new Schema({
    user_name: String,
    user_mail: String,
    user_pass: String,
    user_test: Object,
})
userSchema.methods.authenticate = function(password) {
    //implementation code goes here
}
userTable = mongoose.model('User', userSchema,);
module.exports = {
    createData: function (user_mail, user_name, user_pass, callback) {
        userTable.updateOne({user_mail: user_mail}, {
            user_name: user_name,
            user_mail: user_mail,
            user_pass: user_pass,
            user_test: {
                test_id: "",
                test_catid: "",
                is_test_done: false,
                test_sure: "",
                test_answers: {
                    soru1: "",
                    soru2: "",
                    soru3: "",
                    soru4: "",
                    soru5: "",
                    soru6: "",
                    soru7: "",
                    soru8: "",
                    soru9: "",
                    soru10: "",
                }
            },
        }, {upsert: true}, (err, data) => {
            if (err) throw err;
            return callback(data);
        });
    },

    fetchData: function (user_mail, user_pass, callback) {
        userTable.findOne({"user_mail": user_mail,'user_pass':user_pass}, (error, result) => {
            if (error) throw error;
            return callback(result);
        });
    },

    updateData: function (user_id, test_sure, soru1, soru2, soru3, soru4, soru5, soru6, soru7, soru8, soru9, soru10) {
        userTable.updateOne({"_id": user_id}, {
            user_test: {
                test_sure: test_sure,
                test_answers: {
                    soru1: soru1,
                    soru2: soru2,
                    soru3: soru3,
                    soru4: soru4,
                    soru5: soru5,
                    soru6: soru6,
                    soru7: soru7,
                    soru8: soru8,
                    soru9: soru9,
                    soru10: soru10,
                }
            },
        }, {}, (err, data) => {
            return data;
        });
    },

    deleteData: function (callback) {
        userTable.deleteOne({user_mail: "huzeyfedinc@gmail.com"}, {}, (err, data) => {
            if (err) throw err;
            return callback(data);
        });

    },
}