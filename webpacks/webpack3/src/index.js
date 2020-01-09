import aa from './print';

function init() {
    const ele = document.createElement('div');
    ele.innerHTML = 'ss' + aa();
    return ele
}

let element = init();
document.body.appendChild(element)