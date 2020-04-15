import React from 'react';
import { style } from 'typestyle';
import { Link } from 'react-router-dom';
import $ from 'jquery';


const sty = {
    app: style({
        background: '#f4f4f4',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    body: style({
        width: '400px',
        height: '400px',
        border: '1px solid rgba(135, 208, 104, 1)',
        textAlign: 'center',
    }),
}
// consumer: 'rgb(255, 191, 0)',
//     supplier: 'rgb(135, 208, 104)',
//     manufacturer: '#ff7067',
//     dealer: '#1890ff',
let fileName;
let file;
export class Logout extends React.Component {
    toLogout = () => {
        $.ajax({
            type: 'post',
            url: `http://localhost:8888/post_login`,
            data: {
                zsp: 'ds',
                pwd: 'aaa'
            },
            success: (data) => {
                // this.props.
                console.log(data)
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
    toUpload = () => {
        console.log(fileName, file, $('#upload').val())
        $.ajax({
            type: 'post',
            url: `http://localhost:8888/post_upload`,
            data: {
                file: $('#upload').val()
            },
            contentType: false,
            processData: false,
            dataType: 'json',
            success: (data) => {
                // this.props.
                console.log(data)
            },
            error: (err) => {
                console.log(err)
            }
        })
        // $.ajax({
        //     type: 'POST',
        //     url: `http://localhost:8888/post_upload`,
        //     // beforeSend: (xhr) => {
        //     //     // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //     // },
        //     data: {
        //         zsp: 'ds',
        //         pwd: 'aaa'
        //         // fileName: JSON.stringify(fileName),

        //     },
        //     // contentType: false,
        //     // processData: false,
        //     // dataType: 'json',
        //     success: (data) => {
        //         // this.props.
        //         console.log(data)
        //     },
        //     error: (err) => {
        //         console.log(err)
        //     }
        // })
    }
    componentDidMount() {
    }
    render() {
        return <div className={sty.app}>
            <div className={sty.body}>
                <div onClick={this.toLogout}>退出</div>
                <Link to='/home'>首页</Link>
                <form action="http://192.168.11.55:8888/post_upload" method="post" enctype="multipart/form-data">
                    <input type="file" name="image" size="50" />
                    <br />
                    <input type="submit" value="上传文件" />
                </form>
                <br />
                <input
                    id='upload'
                    type='file'
                    onChange={(e) => {
                        fileName = e.currentTarget.files[0]['name'];
                        file = e.target.files;
                    }}
                />
                <div onClick={this.toUpload}>提交</div>
            </div>
        </div>
    }
}