;
const urlList = [
    "./init.js",
    "./el.js",
    "./data.js",
    "./methods.js",
    "./watch.js",
    "./directives.js",
    "./components.js",
    "./router.js",
];

const _head = document.getElementsByTagName('head')[0];

urlList.map((v, i) => {
    if (i == 0) return;
    const _script = document.createElement('script');
    _script.setAttribute('src', v);
    _head.append(_script);
    if (i === urlList['length'] - 1) {
        const _body = document.getElementsByTagName('html')[0];
        const _initScript = document.createElement('script');
        _initScript.setAttribute('src', urlList[0]);
        _body.append(_initScript);
    }
})

