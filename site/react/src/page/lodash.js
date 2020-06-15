import React, { Component } from 'react'
import _ from 'lodash'
import { ajax } from '../common/ajax'
// import { Button } from 'antd'

export class LodashView extends Component {
    ajaxs() {
        ajax('post', '/file').then(r => {
            console.log(r)
        })
    }
    render() {
        const chunkList = [1, 2, 3, 4, 5]
        const _chunkList = _.chunk(chunkList, 2)
        console.log(chunkList, _chunkList)
        return <div>
            LodashView
             <span onClick={() => this.ajaxs()}>ajax</span>
        </div>
    }
}