exports.success = function (data) {
    const obj = {
        status: 'ok',
        data: !!data ? data : null,
        error: null,
    }
    return JSON.stringify(obj)
}
exports.error = function (info) {
    const obj = {
        status: 'err',
        data: null,
        error: JSON.stringify(info),
    }
    return JSON.stringify(obj)
}