var mongoose = require('mongoose');
// create an schema
var testFenSchema = new mongoose.Schema({
    test_question: String,
    test_type: String,
    test_answer: String,
});
testFenTable = mongoose.model('test_fen', testFenSchema, 'test_fen');

module.exports = {
    fetchData: function (callback) {
        testFenTable.find({}, (err, res) => {
            if (err) throw err;
            return callback(res);
        });
    }
}