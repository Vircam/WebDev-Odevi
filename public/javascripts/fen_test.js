countDownTimer();
var xhr = new XMLHttpRequest();
function post(path, params, method = 'post') {
    xhr.open(method, path, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(params));
}

function countDownTimer(time,path,id) {
    var countDownDate = new Date().getTime() + 30 * 60000;

    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        if (seconds % 5 === 0) {
            post('/fentest', {
                id:id,
                isDone:false,
                test_sure: new Date().getTime(),
                baslangic:0,
                bitis:0,
                soru1: "a",
                soru2: "b",
                soru3: "c",
                soru4: "d",
                soru5:"a",
                soru6: "a",
                soru7: "b",
                soru8: "c",
                soru9: "d",
                soru10:"a",
            });
        }
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}