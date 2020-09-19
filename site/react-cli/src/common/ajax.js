import $ from 'jquery';
import {serverUrl} from './server';

function get (url, data) {
    const params = data || {};
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            contentType: "application/json;charset=UTF-8",
            url: serverUrl + url,
            data: JSON.stringify(params),
            headers: {},
            success: (result) => {
                resolve(result)
            },
            error: (err) =>{
                reject(err)
            }
        });
    })
}

function post (url, data) {
    const params = data || {};
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            url: serverUrl + url,
            data: JSON.stringify(params),
            headers: {},
            success: (result) => {
                resolve(result)
            },
            error: (err) =>{
                reject(err)
            }
        });
    })
}


export {get, post}
