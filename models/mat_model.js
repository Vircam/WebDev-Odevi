var mongoose = require('mongoose');
// create an schema
var testMatSchema = new mongoose.Schema({
    test_question: Array,
    test_type: String,
    test_answer: String,
});
testMatTable = mongoose.model('test_mat', testMatSchema, 'test_mat');

module.exports = {
    fetchData: function (callback) {
        testMatTable.find({}, (err, res) => {
            if (err) throw err;
            return callback(res);
        });
    }
}