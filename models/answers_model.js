var mongoose = require('mongoose');
// create an schema
var answersSchema = new mongoose.Schema({
    test_catid: String,
    soru1: String,
    soru2: String,
    soru3: String,
    soru4: String,
    soru5: String,
    soru6: String,
    soru7: String,
    soru8: String,
    soru9: String,
    soru10: String,
});
answersTable = mongoose.model('answer', answersSchema, 'answers');

module.exports = {
    fetchData: function (testid, callback) {
        answersTable.find({}, {}, {}, (err, res) => {
            if (err) throw err;
            return callback(res);
        });
    }
}