function timer(){
    var minutes, seconds = 0;
    if(seconds == 0){
        seconds = 59;
    }
    for(let i = 59; i >= 0; i--){

    }
    
}

function uyarı(){
    if (confirm("Cevaplarınız gönderilecek, emin misiniz?")){
        window.location.href = "index.html";
    }
}

function bgChanger(id){
    document.getElementById(id).style.backgroundColor = "lightblue";
}

function sendAnswers(){
    var select1 = document.getElementById("question1")
    var value1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("question2")
    var value2 = select2.options[select2.selectedIndex].value;
    var value3 = document.getElementById("question3").value;
    var select4 = document.getElementById("question4")
    var value4 = select4.options[select4.selectedIndex].value;
    var select5 = document.getElementById("question5")
    var value5 = select5.options[select5.selectedIndex].value;
    var select6 = document.getElementById("question6")
    var value6 = select6.options[select6.selectedIndex].value;
    var value7 = document.getElementById("question7").value;
    var value8 = document.getElementById("question8").value;
    var select9 = document.getElementById("question9")
    var value9 = select9.options[select9.selectedIndex].value;
    var select10 = document.getElementById("question10")
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