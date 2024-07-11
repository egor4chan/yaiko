var health = 10;
var shop_btn = document.getElementById('shopbtn');

function randint(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand)
}

function win() {
    health -= 1
    if (health == 0) {
    var shop_btn = document.getElementById('shopbtn');
    var egg = document.getElementById('clicker');
    let label = document.getElementById('label');
    let prelabel = document.getElementById('prelabel');
    egg.onclick = 'cont()';
  
    shop_btn.style = 'opacity: 1;';
    egg.src = 'success.PNG';
    label.innerHTML = String(randint(5, 50) / 100) + ' TON'
    prelabel.innerHTML = 'О да, в яйке оказалась бабло! Получяй бесплатные яйки за приглашения.';
    }
}

function cont() {
    let egg = document.getElementById('clicker');
    let label = document.getElementById('label');
    let prelabel = document.getElementById('prelabel');

    egg.className == 'success'
    egg.src = 'egg.PNG';
    label.innerHTML = 'Яйко нищеты'
    prelabel.innerHTML = 'Тибе врятли чота выпадет с бесплатного яйка такчто купи богатае не позорся.'


}

