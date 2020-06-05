; const VueWatch = (function () {
    return {
        vWatch: function (v) {
            console.log('vWatch', this.vWatch)
            this.vWatch = v;
            if (this.vWatch > 10) {
                console.log(this.vWatch)
            }
        }
    }
}())
