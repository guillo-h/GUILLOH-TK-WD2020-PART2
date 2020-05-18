// Random Numbers
function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

function shuffle() {
    var ln = this.length;
    for (var i = 0; i < ln; i++) {
        var rand = getRandomNumber(0, i);
        var temp = this[i];
        if (rand !== i) {
        this[i] = this[rand];
        }
        this[rand] = temp;
    }
}

Array.prototype.shuffle = shuffle;

function DistinctRandomNumberGenerator(maxDigits) {

    maxDigits = Number(maxDigits) || 3;
    var max = 10 ** maxDigits + 1;
    var arr = [];

    for (var i = 1; i <= max; i++) {
        arr.push(i);
    }

    arr.shuffle();

    function getRandomKey() {
        return arr.length ? arr.shift() : 0;
    }

    this.getRandomKey = getRandomKey;

}

// Show Random Fact
function rndFact(elemID) {
    var drng = new DistinctRandomNumberGenerator(3);
    drng = drng.getRandomKey();
    console.log(drng);
    fetch('http://numbersapi.com/'+ drng +'?json')
    .then(response => response.json())
    .then(data => document.getElementById(elemID).innerHTML = data.text);
}

rndFact('n_fact1');
rndFact('n_fact2');
rndFact('n_fact3');

// Repeat every 5 sec
setInterval(function(){ 
    rndFact('n_fact1');
    rndFact('n_fact2');
    rndFact('n_fact3'); 
}, 5000);