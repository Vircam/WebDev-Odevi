function sendAnswersMat() {
    const select1 = document.getElementById("question1"), value1 = select1.options[select1.selectedIndex].value,
        select2 = document.getElementById("question2"), value2 = select2.options[select2.selectedIndex].value,
        value3 = document.getElementById("question3").value, select4 = document.getElementById("question4"),
        value4 = select4.options[select4.selectedIndex].value, select5 = document.getElementById("question5"),
        value5 = select5.options[select5.selectedIndex].value, select6 = document.getElementById("question6"),
        value6 = select6.options[select6.selectedIndex].value;
    const value7 = document.getElementById("question7").value;
    const value8 = document.getElementById("question8").value, select9 = document.getElementById("question9"),
        value9 = select9.options[select9.selectedIndex].value, select10 = document.getElementById("question10"),
        value10 = select10.options[select10.selectedIndex].value, values = [];
    values[0] = value1;
    values[1] = value2;
    values[2] = value3;
    values[3] = value4;
    values[4] = value5;
    values[5] = value6;
    values[6] = value7;
    values[7] = value8;
    values[8] = value9;
    values[9] = value10;
    return values;
}

