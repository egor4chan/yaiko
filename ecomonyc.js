var balance = document.getElementById('counter');
//window.localStorage.setItem('balance',0);
balance.innerHTML = window.localStorage.getItem('balance')
//window.localStorage.setItem('power', 1);

var button = document.getElementById('up');

levels = {1: 100, 2: 300, 3: 1000, 4: 3000, 5: 9000, 6: 30000, 7: 50000, 8: 100000, 9: 300000, 10: 500000}

var power_user = Number(window.localStorage.getItem('power'));
var user_upgrade_price = Number(levels[power_user])
button.innerHTML = `Buy - ${user_upgrade_price}`;

function upgrade() {
    if (Number(window.localStorage.getItem('balance')) >= user_upgrade_price) {
    var ress = Number(window.localStorage.getItem('balance')) - user_upgrade_price;
    balance.innerHTML = ress;
    window.localStorage.setItem('balance', ress);

    var old_power = window.localStorage.getItem('power')
    var new_power = Number(old_power) + 1;
    window.localStorage.setItem('power', new_power)

    user_upgrade_price = levels[new_power]

    console.log('User price now: ', user_upgrade_price)
    button.innerHTML = `Buy - ${user_upgrade_price}`;
}
}