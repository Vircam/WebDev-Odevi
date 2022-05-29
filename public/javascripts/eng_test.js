function warning(){
    if (confirm("Your answers will be send, are you sure?")){
        window.location.href = "index.html";
    }
}

function bgChanger(id){
    document.getElementById(id).style.backgroundColor = "lightblue";
}

function sendAnswers(){
    var select1 = document.getElementById("q1")
    var value1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("q2")
    var value2 = select2.options[select2.selectedIndex].value;
    var select3 = document.getElementById("q3")
    var value3 = select3.options[select3.selectedIndex].value;
    var select4 = document.getElementById("q4")
    var value4 = select4.options[select4.selectedIndex].value;
    var select5 = document.getElementById("q5")
    var value5 = select5.options[select5.selectedIndex].value;
    var value6 = document.getElementById("q6").value;
    var select7 = document.getElementById("q7")
    var value7 = select7.options[select7.selectedIndex].value;
    var select8 = document.getElementById("q8")
    var value8 = select8.options[select8.selectedIndex].value;
    var select9 = document.getElementById("q9")
    var value9 = select9.options[select9.selectedIndex].value;
    var select10 = document.getElementById("q10")
    var value10 = select10.options[select10.selectedIndex].value;

    var values = [];
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
    console.log(values);
    return values;   
}