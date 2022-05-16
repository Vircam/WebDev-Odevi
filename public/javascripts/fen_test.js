
function myFunction(userData) {
        form.onsubmit = function (e) {
                e.preventDefault();
                var select = document.form.answer.value;
                alert(select);
        }
}

function submitForm(rows) {

        try {
                rows = JSON.parse(rows);
                for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var form = document.getElementById('pp_' + row.test_id);
                        if (document.getElementById('answer_a_' + row.test_id).checked) {
                                rate_value = document.getElementById('answer_a_' + row.test_id).value;
                                alert(rate_value);
                        }
                }
        } catch (error) {
                alert(error);
        }

}