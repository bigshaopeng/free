;
const urlList = [
    "./el.js",
    "./data.js",
    "./methods.js",
    "./watch.js",
    "./directives.js",
    "./components.js",
    "./router.js",
    "./store.js",
    "./init.js",
];

const _head = document.getElementsByTagName('head')[0];

urlList.map((v, i) => {
    const _script = document.createElement('script');
    _script.setAttribute('src', v);
    _head.append(_script);
})

