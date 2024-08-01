var clicker = document.getElementById('egg');
var balance = document.getElementById('counter');
var energy = document.getElementById('energy_count');


function add_clicker_effect(x, y) {
    let el = document.createElement("h6");
    el.setAttribute('id', 'cc')
    el.innerHTML = '+' + String(window.localStorage.getItem('power'));
    el.style.position = 'absolute';
    el.style.top = `${y}px`
    el.style.left = `${x}px`
    document.body.appendChild(el)
    el.onclick = click;
    setTimeout(function() {
        el.remove();
    }, 200)
}

function energy_limit() {
    var energy = document.getElementById('energy_count');
    if (Number(energy.innerHTML) < 1000) {
        var new_energy = Number(energy.innerHTML) + 1;
        var r = energy.innerHTML = new_energy;
        
    }
    else {
        console.log('energy is full');
    }
}

clicker.addEventListener('click', function(event) {
    if (window.localStorage.getItem('power') == null) {
        window.localStorage.setItem('power', 1)
    }

    click(window.localStorage.getItem('power'))
    add_clicker_effect(event.clientX, event.clientY)
})


function click(power) {
    if (Number(energy.innerHTML) != 0) {
        
        var new_balance = Number(balance.innerHTML) + Number(power);
        
        balance.innerHTML = new_balance;
        energy.innerHTML -= 1;
        window.localStorage.setItem('balance', new_balance)

        console.log('Local storage: ', window.localStorage.getItem('balance'))
        console.log('POWER storage: ', window.localStorage.getItem('power'))
    }
    else {
        console.log('No energy...')
    }
    
}

setInterval(energy_limit, 2000)




