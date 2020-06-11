;
new Promise((resolve) => {
    const _s = setInterval(() => {
        // 异步添加
        const _bool = window.Vue && window.VueRouter;
        if (_bool) {
            clearInterval(_s)
            resolve(true)
        }
    }, 100)
}).then(() => {
    const _init = (function () {
        return {
            el: VueEl,
            data: VueData,
            methods: VueMethods,
            watch: VueWatch,
            components: VueComponents,
            directives: VueDirectives,
            router: new VueRouter({ VueRouters })
        }
    }())
    new Vue(_init);
    document.body.style.opacity = 1;
})


