function uyari(baslangicTime, bitisTime, path, id, which) {
    let countDownDate = new Date().getTime() + 30 * 60000;
    if (baslangicTime == 0) {
        baslangicTime = new Date().getTime()
    } else if (baslangicTime < new Date().getTime()) {
        countDownDate = bitisTime
    }
    let value;
    if (which == "eng") {
        value = sendAnswersEng();
    }else if(which == "fen"){
        value = sendAnswersFen();
    }else if(which == "mat"){
        value = sendAnswersMat();
    }
    if (confirm("Cevaplarınız gönderilecek, emin misiniz?")) {
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

const xhr = new XMLHttpRequest();

async function post(path, params, method = 'post') {
    await xhr.open(method, path, true);
    await xhr.setRequestHeader('Content-Type', 'application/json');
    await xhr.send(JSON.stringify(params));
}

function countDownTimer(baslangicTime, bitisTime, path, id, isDone, which) {
    console.log(isDone)
    if (isDone==true||isDone=="true") {
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
        let value;
        if (which == "eng") {
            value = sendAnswersEng();
        }else if(which == "fen"){
            value = sendAnswersFen();
        }else if(which == "mat"){
            value = sendAnswersMat();
        }
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        if (seconds % 5 === 0) {
            post(path, {
                id: id,
                isDone: false,
                test_sure: minutes+":"+seconds,
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
                test_sure:  minutes+":"+seconds,
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

function bgChanger(id) {
    document.getElementById(id).style.backgroundColor = "lightblue";
}

function sendPuan(testAnswers,){
      xhr.open("post", "/puan", true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(testAnswers));
    console.log(JSON.stringify(testAnswers))
  //  window.location.href = "puan"
}