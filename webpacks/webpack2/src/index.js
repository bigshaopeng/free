import printMe from './print';

function info() {
    const ele = document.createElement('div');
    ele.innerHTML = printMe();
    return ele
}
let element = info();
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = info(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}