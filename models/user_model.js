const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
let userSchema = new Schema({
    user_name: String,
    user_mail: {type: String, unique: true, required: true, dropDups: true},
    user_pass: String,
    user_test: [{
        test_catid: "",
        is_test_done: false,
        test_baslangic: 0,
        test_bitis: 0,
        test_sure: String,
        test_answers: {
            soru1: String,
            soru2: String,
            soru3: String,
            soru4: String,
            soru5: String,
            soru6: String,
            soru7: String,
            soru8: String,
            soru9: String,
            soru10:String,
        }
    }],
});
userTable = mongoose.model('User', userSchema, "users");
module.exports = {
    createData: function (user_mail, user_name, user_pass, callback) {
        let userim = {
            user_name: user_name,
            user_mail: user_mail,
            user_pass: user_pass,
            user_test: [{
                test_catid: "0",
                is_test_done: false,
                test_baslangic: 0,
                test_bitis: 0,
                test_sure: "0",
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
            }, {
                test_catid: "1",
                is_test_done: false,
                test_baslangic: 0,
                test_bitis: 0,
                test_sure: "0",
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
            }, {
                test_catid: "2",
                is_test_done: false,
                test_baslangic: 0,
                test_bitis: 0,
                test_sure: "0",
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
            }],
        };
        userTable.create(userim, (error, result) => {
            if (error) {
                return callback(error)
            }
            return callback(result);
        })
    },

    signIn: function (user_mail, user_pass, callback) {
        userTable.findOne({"user_mail": user_mail, 'user_pass': user_pass}, (error, result) => {
            if (error) {
                return callback(error)
            }
            return callback(result);
        });
    },
    fetchData: function (user_id, callback) {
        userTable.findById(user_id, (error, result) => {
            if (error) {
                return callback(error)
            }
            return callback(result);
        });
    },
    updateData: function (user_id, body) {
        userTable.updateOne({"_id": user_id, "user_test.test_catid": body.test_catid}, {
            $set: {
                "user_test.$.is_test_done": body.is_test_done,
                "user_test.$.test_sure": body.test_sure,
                "user_test.$.test_baslangic": body.test_baslangic,
                "user_test.$.test_bitis": body.test_bitis,
                "user_test.$.test_answers.soru1": body.test_answers.soru1,
                "user_test.$.test_answers.soru2": body.test_answers.soru2,
                "user_test.$.test_answers.soru3": body.test_answers.soru3,
                "user_test.$.test_answers.soru4": body.test_answers.soru4,
                "user_test.$.test_answers.soru5": body.test_answers.soru5,
                "user_test.$.test_answers.soru6": body.test_answers.soru6,
                "user_test.$.test_answers.soru7": body.test_answers.soru7,
                "user_test.$.test_answers.soru8": body.test_answers.soru8,
                "user_test.$.test_answers.soru9": body.test_answers.soru9,
                "user_test.$.test_answers.soru10": body.test_answers.soru10,
            },
        }, {}, (err, data) => {
            if (err) {
                console.log("error:" + err.toString())
            }
            return data;
        });
    },

    deleteData: function (callback) {
        userTable.deleteOne({user_mail: "huzeyfedinc@gmail.com"}, {}, (err, data) => {
            if (err) {
                return callback(error)
            }
            return callback(data);
        });

    },
}