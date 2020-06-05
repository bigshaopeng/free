; const VueDirectives = (function () {
    return {
        // 注册一个局部的自定义指令 v-focus
        focus: {
            // 指令的定义
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        }
    }
}())
