; const VueMethods = (function () {
    return {
        details: function () {
            return this.site + " methods";
        },
        bindClick: function () {
            console.log('bind-click')
        },
        bindInput: function (e) {
            console.log('e', e)
            this.vInput = e.target.value
        },
        vForList: function () {
            return [
                { a: 'aa' },
                { a: 'bb' },
                { a: 'cc' },
                { a: 'dd' },
                { b: 'ee' },
            ]
        },
        vForObj: function () {
            return {
                a: 'aa',
                b: 'bb',
                c: 'cc'
            }
        },
        vWatchAdd: function () {
            this.vWatch++
        },
        vWatchPrev: function () {
            this.vWatch--
        }
    }
}())
