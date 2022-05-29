function uyari(baslangicTime, bitisTime, path, id) {
    let countDownDate = new Date().getTime() + 30 * 60000;
    if (baslangicTime == 0) {
        baslangicTime = new Date().getTime()
    } else if (baslangicTime < new Date().getTime()) {
        countDownDate = bitisTime
    }
    if (confirm("Cevaplarınız gönderilecek, emin misiniz?")) {
        const value = sendAnswers();
        console.log(countDownDate)
        post(path, {
            id: id,
            isDone: true,
            test_sure: countDownDate,
            baslangic: baslangicTime,
            bitis: 0,
            soru1: value[0],
            soru2: value[1],
            soru3: value[2],
            soru4: value[3],
            soru5: value[4],
            soru6: value[5],
            soru7: value[6],
            soru8: value[7],
            soru9: value[8],
            soru10: value[9]
        })
        window.location.href = "index"
    }
}

function bgChanger(id) {
    document.getElementById(id).style.backgroundColor = "lightblue";
}

function sendAnswers() {
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

const xhr = new XMLHttpRequest();

async function post(path, params, method = 'post') {
    await xhr.open(method, path, true);
    await xhr.setRequestHeader('Content-Type', 'application/json');
    await xhr.send(JSON.stringify(params));
}

//convert seconds to milliseconds   

function countDownTimer(baslangicTime, bitisTime, path, id,isDone) {
    if(isDone){
        console.log("test bitti")
        return;
    }
    let countDownDate = new Date().getTime() + 30 * 60000;
    if (baslangicTime == 0) {
        baslangicTime = new Date().getTime()
    } else if (baslangicTime < new Date().getTime()) {
        countDownDate = bitisTime
    }
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const value = sendAnswers();
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        if (seconds % 5 === 0) {
            post(path, {
                id: id,
                isDone: distance < 0,
                test_sure: countDownDate,
                baslangic: baslangicTime,
                bitis: countDownDate,
                soru1: value[0],
                soru2: value[1],
                soru3: value[2],
                soru4: value[3],
                soru5: value[4],
                soru6: value[5],
                soru7: value[6],
                soru8: value[7],
                soru9: value[8],
                soru10: value[9]
            });
        }
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
            post(path, {
                id: id,
                isDone: true,
                test_sure: countDownDate,
                baslangic: baslangicTime,
                bitis: countDownDate,
                soru1: value[0],
                soru2: value[1],
                soru3: value[2],
                soru4: value[3],
                soru5: value[4],
                soru6: value[5],
                soru7: value[6],
                soru8: value[7],
                soru9: value[8],
                soru10: value[9]
            });
        }
    }, 1000);
}