; const VueComponents = (function () {
    const components1 = {
        template: '<h4>components1</h4>'
    }
    const components2 = {
        props: ['message'],
        directives: {
            // focus: {
            //     // 指令的定义
            //     inserted: function (el) {
            //         // 聚焦元素
            //         el.focus()
            //     }
            // }
        },
        template: '<span><h4>{{message}}</h4><input type="text" v-focus /></span>'
    }
    return {
        components1,
        components2,
    }
}())
