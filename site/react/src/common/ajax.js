const host = 'http://127.0.0.1:8989';

const ajax = (params) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.status === 200 && xmlHttp.readyState === 4) {
            const data = xmlHttp.responseText
        }
    }
    xmlHttp.open('GET', `${host}${params}`, true)
    xmlHttp.send()
}

export {
    ajax
}
