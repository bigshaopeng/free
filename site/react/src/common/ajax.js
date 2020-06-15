import _ from 'lodash'

const host = 'http://127.0.0.1:8989'

const ajax = (type, params, ...rest) => {
    const isGet = _.toUpper(type) === 'GET';

    if (isGet) {
        return new Promise((resolve) => {
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = () => {
                if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
                    const data = xmlHttp.responseText
                    resolve(data)
                }
            }
            xmlHttp.open('GET', `${host}${params}`, true)
            xmlHttp.send()
        })
    }
    return new Promise((resolve) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
                const data = xmlHttp.responseText
                resolve(data)
            }
        }
        xmlHttp.open('POST', `${host}${params}`, true)
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xmlHttp.send('name=zsp,user=kk')
    })
}

export {
    ajax
}
