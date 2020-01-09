import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import { square } from "./math.js";
// import Icon from '../../upload/head/2.png';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = square(2);
    btn.onclick = printMe;
    element.appendChild(btn);


    // element.classList.add('hello');

    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    return element;
}

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);


if (module.hot) {
    module.hot.accept('./print.js', function () {
        // printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}