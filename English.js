function practice11(id){
    var select1 = document.getElementById("1-1-1");
    var value1 = select1.options[select1.selectedIndex].value;
    
    var select2 = document.getElementById("1-1-2");
    var value2 = select2.options[select2.selectedIndex].value;
    
    var select3 = document.getElementById("1-1-3");
    var value3 = select3.options[select3.selectedIndex].value;

    if (id == "1-1-1"){
        if (value1 == "c"){
            document.getElementById("trueFalse111").innerHTML = "Correct";
            document.getElementById("trueFalse111").style.color = "green";
        }
        if (value1 != "c"){
            document.getElementById("trueFalse111").innerHTML = "Incorrect";
            document.getElementById("trueFalse111").style.color = "red";
        }
    }

    if (id == "1-1-2"){
        if (value2 == "a"){
            document.getElementById("trueFalse112").innerHTML = "Correct";
            document.getElementById("trueFalse112").style.color = "green";
        }
        if (value2 != "a"){
            document.getElementById("trueFalse112").innerHTML = "Incorrect";
            document.getElementById("trueFalse112").style.color = "red";
        }
    }
    
    if (id == "1-1-3"){
        if (value3 == "b"){
            document.getElementById("trueFalse113").innerHTML = "Correct";
            document.getElementById("trueFalse113").style.color = "green";
        }
        if (value3 != "b"){
            document.getElementById("trueFalse113").innerHTML = "Incorrect";
            document.getElementById("trueFalse113").style.color = "red";
        }   
    }  
}

function practice12(id){
    var select1 = document.getElementById("1-2-1")
    var value1 = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById("1-2-2")
    var value2 = select2.options[select2.selectedIndex].value;

    var select3 = document.getElementById("1-2-3")
    var value3 = select3.options[select3.selectedIndex].value;

    var select4 = document.getElementById("1-2-4")
    var value4 = select4.options[select4.selectedIndex].value;

    if (id == "1-2-1"){
        if (value1 == "Come in"){
            document.getElementById("trueFalse121").innerHTML = "Correct";
            document.getElementById("trueFalse121").style.color = "green";
        }
        if (value1 != "Come in"){
            document.getElementById("trueFalse121").innerHTML = "Incorrect";
            document.getElementById("trueFalse121").style.color = "red";
        } 
    }

    if (id == "1-2-2"){
        if (value2 == "Sit down"){
            document.getElementById("trueFalse122").innerHTML = "Correct";
            document.getElementById("trueFalse122").style.color = "green";
        }
        if (value2 != "Sit down"){
            document.getElementById("trueFalse122").innerHTML = "Incorrect";
            document.getElementById("trueFalse122").style.color = "red";
        } 
    }

    if (id == "1-2-3"){
        if (value3 == "Shut"){
            document.getElementById("trueFalse123").innerHTML = "Correct";
            document.getElementById("trueFalse123").style.color = "green";
        }
        if (value3 != "Shut"){
            document.getElementById("trueFalse123").innerHTML = "Incorrect";
            document.getElementById("trueFalse123").style.color = "red";
        } 
    }

    if (id == "1-2-4"){
        if (value4 == "Eat"){
            document.getElementById("trueFalse124").innerHTML = "Correct";
            document.getElementById("trueFalse124").style.color = "green";
        }
        if (value4 != "Eat"){
            document.getElementById("trueFalse124").innerHTML = "Incorrect";
            document.getElementById("trueFalse124").style.color = "red";
        } 
    }
}

function practice13(id){
    var select1 = document.getElementById("1-3-1")
    var value1 = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById("1-3-2")
    var value2 = select2.options[select2.selectedIndex].value;

    var select3 = document.getElementById("1-3-3")
    var value3 = select3.options[select3.selectedIndex].value;

    var select4 = document.getElementById("1-3-4")
    var value4 = select4.options[select4.selectedIndex].value;

    if (id == "1-3-1"){
        if (value1 == 3){
            document.getElementById("trueFalse131").innerHTML = "Correct";
            document.getElementById("trueFalse131").style.color = "green";
        }
        if (value1 != 3){
            document.getElementById("trueFalse131").innerHTML = "Incorrect";
            document.getElementById("trueFalse131").style.color = "red";
        } 
    }

    if (id == "1-3-2"){
        if (value2 == 1){
            document.getElementById("trueFalse132").innerHTML = "Correct";
            document.getElementById("trueFalse132").style.color = "green";
        }
        if (value2 != 1){
            document.getElementById("trueFalse132").innerHTML = "Incorrect";
            document.getElementById("trueFalse132").style.color = "red";
        } 
    }

    if (id == "1-3-3"){
        if (value3 == 4){
            document.getElementById("trueFalse133").innerHTML = "Correct";
            document.getElementById("trueFalse133").style.color = "green";
        }
        if (value3 != 4){
            document.getElementById("trueFalse133").innerHTML = "Incorrect";
            document.getElementById("trueFalse133").style.color = "red";
        } 
    }

    if (id == "1-3-4"){
        if (value4 == 2){
            document.getElementById("trueFalse134").innerHTML = "Correct";
            document.getElementById("trueFalse134").style.color = "green";
        }
        if (value4 != 2){
            document.getElementById("trueFalse134").innerHTML = "Incorrect";
            document.getElementById("trueFalse134").style.color = "red";
        } 
    }
}

function practice151(id){
    var valueA = document.getElementById("15a").value;
    var valueB = document.getElementById("15b").value;
    var valueC = document.getElementById("15c").value;
    var valueD = document.getElementById("15d").value;
    
    if (id == "15a")
    {
        if (valueA == 15){
            document.getElementById("1-5-1").innerHTML = "Correct";
            document.getElementById("1-5-1").style.color = "green";
        }
        else{
            document.getElementById("1-5-1").innerHTML = "Incorrect";
            document.getElementById("1-5-1").style.color = "red";
        }
    }

    if (id == "15b")
    {
        if (valueB == 12){
            document.getElementById("1-5-2").innerHTML = "Correct";
            document.getElementById("1-5-2").style.color = "green";
        }
        else{
            document.getElementById("1-5-2").innerHTML = "Incorrect";
            document.getElementById("1-5-2").style.color = "red";
        }
    }

    if (id == "15c")
    {
        if (valueC == 30){
            document.getElementById("1-5-3").innerHTML = "Correct";
            document.getElementById("1-5-3").style.color = "green";
        }
        else{
            document.getElementById("1-5-3").innerHTML = "Incorrect";
            document.getElementById("1-5-3").style.color = "red";
        }
    }

    if (id == "15d")
    {
        if (valueD == 4){
            document.getElementById("1-5-4").innerHTML = "Correct";
            document.getElementById("1-5-4").style.color = "green";
        }
        else{
            document.getElementById("1-5-4").innerHTML = "Incorrect";
            document.getElementById("1-5-4").style.color = "red";
        }
    }
}

function practice16(id){
    var select1 = document.getElementById("1-6-1")
    var value1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("1-6-2")
    var value2 = select2.options[select2.selectedIndex].value;
    var select3 = document.getElementById("1-6-3")
    var value3 = select3.options[select3.selectedIndex].value;
    var select4 = document.getElementById("1-6-4")
    var value4 = select4.options[select4.selectedIndex].value;
    var select5 = document.getElementById("1-6-5")
    var value5 = select5.options[select5.selectedIndex].value;
    var select6 = document.getElementById("1-6-6")
    var value6 = select6.options[select6.selectedIndex].value;
    var select7 = document.getElementById("1-6-7")
    var value7 = select7.options[select7.selectedIndex].value;
    var select8 = document.getElementById("1-6-8")
    var value8 = select8.options[select8.selectedIndex].value;
    var select9 = document.getElementById("1-6-9")
    var value9 = select9.options[select9.selectedIndex].value;

    if (id == "1-6-1")
    {
        if (value1 == "G"){
            document.getElementById("trueFalse161").innerHTML = "Correct";
            document.getElementById("trueFalse161").style.color = "green";
        }
        else{
            document.getElementById("trueFalse161").innerHTML = "Incorrect";
            document.getElementById("trueFalse161").style.color = "red";
        }
    }

    if (id == "1-6-2")
    {
        if (value2 == "H"){
            document.getElementById("trueFalse162").innerHTML = "Correct";
            document.getElementById("trueFalse162").style.color = "green";
        }
        else{
            document.getElementById("trueFalse162").innerHTML = "Incorrect";
            document.getElementById("trueFalse162").style.color = "red";
        }
    }

    if (id == "1-6-3")
    {
        if (value3 == "I"){
            document.getElementById("trueFalse163").innerHTML = "Correct";
            document.getElementById("trueFalse163").style.color = "green";
        }
        else{
            document.getElementById("trueFalse163").innerHTML = "Incorrect";
            document.getElementById("trueFalse163").style.color = "red";
        }
    }

    if (id == "1-6-4")
    {
        if (value4 == "F"){
            document.getElementById("trueFalse164").innerHTML = "Correct";
            document.getElementById("trueFalse164").style.color = "green";
        }
        else{
            document.getElementById("trueFalse164").innerHTML = "Incorrect";
            document.getElementById("trueFalse164").style.color = "red";
        }
    }

    if (id == "1-6-5")
    {
        if (value5 == "B"){
            document.getElementById("trueFalse165").innerHTML = "Correct";
            document.getElementById("trueFalse165").style.color = "green";
        }
        else{
            document.getElementById("trueFalse165").innerHTML = "Incorrect";
            document.getElementById("trueFalse165").style.color = "red";
        }
    }

    if (id == "1-6-6")
    {
        if (value6 == "A"){
            document.getElementById("trueFalse166").innerHTML = "Correct";
            document.getElementById("trueFalse166").style.color = "green";
        }
        else{
            document.getElementById("trueFalse166").innerHTML = "Incorrect";
            document.getElementById("trueFalse166").style.color = "red";
        }
    }

    if (id == "1-6-7")
    {
        if (value7 == "C"){
            document.getElementById("trueFalse167").innerHTML = "Correct";
            document.getElementById("trueFalse167").style.color = "green";
        }
        else{
            document.getElementById("trueFalse167").innerHTML = "Incorrect";
            document.getElementById("trueFalse167").style.color = "red";
        }
    }

    if (id == "1-6-8")
    {
        if (value8 == "D"){
            document.getElementById("trueFalse168").innerHTML = "Correct";
            document.getElementById("trueFalse168").style.color = "green";
        }
        else{
            document.getElementById("trueFalse168").innerHTML = "Incorrect";
            document.getElementById("trueFalse168").style.color = "red";
        }
    }

    if (id == "1-6-9")
    {
        if (value9 == "E"){
            document.getElementById("trueFalse169").innerHTML = "Correct";
            document.getElementById("trueFalse169").style.color = "green";
        }
        else{
            document.getElementById("trueFalse169").innerHTML = "Incorrect";
            document.getElementById("trueFalse169").style.color = "red";
        }
    }  
}

function practice17(id){
    var select1 = document.getElementById("1-7-1")
    var value1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("1-7-2")
    var value2 = select2.options[select2.selectedIndex].value;
    var select3 = document.getElementById("1-7-3")
    var value3 = select3.options[select3.selectedIndex].value;
    var select4 = document.getElementById("1-7-4")
    var value4 = select4.options[select4.selectedIndex].value;
    var select5 = document.getElementById("1-7-5")
    var value5 = select5.options[select5.selectedIndex].value;
    var select6 = document.getElementById("1-7-6")
    var value6 = select6.options[select6.selectedIndex].value;
    var select7 = document.getElementById("1-7-7")
    var value7 = select7.options[select7.selectedIndex].value;
    
    if (id == "1-7-1")
    {
        if (value1 == "b"){
            document.getElementById("trueFalse171").innerHTML = "Correct";
            document.getElementById("trueFalse171").style.color = "green";
        }
        else{
            document.getElementById("trueFalse171").innerHTML = "Incorrect";
            document.getElementById("trueFalse171").style.color = "red";
        }
    }

    if (id == "1-7-2")
    {
        if (value2 == "c"){
            document.getElementById("trueFalse172").innerHTML = "Correct";
            document.getElementById("trueFalse172").style.color = "green";
        }
        else{
            document.getElementById("trueFalse172").innerHTML = "Incorrect";
            document.getElementById("trueFalse172").style.color = "red";
        }
    }

    if (id == "1-7-3")
    {
        if (value3 == "g"){
            document.getElementById("trueFalse173").innerHTML = "Correct";
            document.getElementById("trueFalse173").style.color = "green";
        }
        else{
            document.getElementById("trueFalse173").innerHTML = "Incorrect";
            document.getElementById("trueFalse173").style.color = "red";
        }
    }

    if (id == "1-7-4")
    {
        if (value4 == "d"){
            document.getElementById("trueFalse174").innerHTML = "Correct";
            document.getElementById("trueFalse174").style.color = "green";
        }
        else{
            document.getElementById("trueFalse174").innerHTML = "Incorrect";
            document.getElementById("trueFalse174").style.color = "red";
        }
    }

    if (id == "1-7-5")
    {
        if (value5 == "e"){
            document.getElementById("trueFalse175").innerHTML = "Correct";
            document.getElementById("trueFalse175").style.color = "green";
        }
        else{
            document.getElementById("trueFalse175").innerHTML = "Incorrect";
            document.getElementById("trueFalse175").style.color = "red";
        }
    }

    if (id == "1-7-6")
    {
        if (value6 == "f"){
            document.getElementById("trueFalse176").innerHTML = "Correct";
            document.getElementById("trueFalse176").style.color = "green";
        }
        else{
            document.getElementById("trueFalse176").innerHTML = "Incorrect";
            document.getElementById("trueFalse176").style.color = "red";
        }
    }

    if (id == "1-7-7")
    {
        if (value7 == "a"){
            document.getElementById("trueFalse177").innerHTML = "Correct";
            document.getElementById("trueFalse177").style.color = "green";
        }
        else{
            document.getElementById("trueFalse177").innerHTML = "Incorrect";
            document.getElementById("trueFalse177").style.color = "red";
        }
    }
}

function practice18(id){
    var select1 = document.getElementById("1-8-1")
    var value1 = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("1-8-2")
    var value2 = select2.options[select2.selectedIndex].value;
    var select3 = document.getElementById("1-8-3")
    var value3 = select3.options[select3.selectedIndex].value;
    var select4 = document.getElementById("1-8-4")
    var value4 = select4.options[select4.selectedIndex].value;
    var select5 = document.getElementById("1-8-5")
    var value5 = select5.options[select5.selectedIndex].value;
    
    if (id == "1-8-1")
    {
        if (value1 == "c"){
            document.getElementById("trueFalse181").innerHTML = "Correct";
            document.getElementById("trueFalse181").style.color = "green";
        }
        else{
            document.getElementById("trueFalse181").innerHTML = "Incorrect";
            document.getElementById("trueFalse181").style.color = "red";
        }
    }

    if (id == "1-8-2")
    {
        if (value2 == "e"){
            document.getElementById("trueFalse182").innerHTML = "Correct";
            document.getElementById("trueFalse182").style.color = "green";
        }
        else{
            document.getElementById("trueFalse182").innerHTML = "Incorrect";
            document.getElementById("trueFalse182").style.color = "red";
        }
    }

    if (id == "1-8-3")
    {
        if (value3 == "a"){
            document.getElementById("trueFalse183").innerHTML = "Correct";
            document.getElementById("trueFalse183").style.color = "green";
        }
        else{
            document.getElementById("trueFalse183").innerHTML = "Incorrect";
            document.getElementById("trueFalse183").style.color = "red";
        }
    }

    if (id == "1-8-4")
    {
        if (value4 == "b"){
            document.getElementById("trueFalse184").innerHTML = "Correct";
            document.getElementById("trueFalse184").style.color = "green";
        }
        else{
            document.getElementById("trueFalse184").innerHTML = "Incorrect";
            document.getElementById("trueFalse184").style.color = "red";
        }
    }

    if (id == "1-8-5")
    {
        if (value5 == "d"){
            document.getElementById("trueFalse185").innerHTML = "Correct";
            document.getElementById("trueFalse185").style.color = "green";
        }
        else{
            document.getElementById("trueFalse185").innerHTML = "Incorrect";
            document.getElementById("trueFalse185").style.color = "red";
        }
    }
}

function practice19(id){
    var value1 = document.getElementById("1-9-1").value.toLowerCase();
    var value2 = document.getElementById("1-9-2").value.toLowerCase();
    var value3 = document.getElementById("1-9-3").value.toLowerCase();
    var value4 = document.getElementById("1-9-4").value.toLowerCase();
    console.log(value4);
    if (id == "1-9-1")
    {
        if (value1 == "twenty-four"){
            document.getElementById("trueFalse191").innerHTML = "Correct";
            document.getElementById("trueFalse191").style.color = "green";
        }
        else{
            document.getElementById("trueFalse191").innerHTML = "Incorrect";
            document.getElementById("trueFalse191").style.color = "red";
        }
    }

    if (id == "1-9-2")
    {
        if (value2 == "forty-eight"){
            document.getElementById("trueFalse192").innerHTML = "Correct";
            document.getElementById("trueFalse192").style.color = "green";
        }
        else{
            document.getElementById("trueFalse192").innerHTML = "Incorrect";
            document.getElementById("trueFalse192").style.color = "red";
        }
    }

    if (id == "1-9-3")
    {
        if (value3 == "fourteen"){
            document.getElementById("trueFalse193").innerHTML = "Correct";
            document.getElementById("trueFalse193").style.color = "green";
        }
        else{
            document.getElementById("trueFalse193").innerHTML = "Incorrect";
            document.getElementById("trueFalse193").style.color = "red";
        }
    }

    if (id == "1-9-4")
    {
        if (value4 == "four"){
            document.getElementById("trueFalse194").innerHTML = "Correct";
            document.getElementById("trueFalse194").style.color = "green";
        }
        else{
            document.getElementById("trueFalse194").innerHTML = "Incorrect";
            document.getElementById("trueFalse194").style.color = "red";
        }
    }
}