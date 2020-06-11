import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

export class Antd extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: 0
        }
    }

    chunk = () => {
        console.log('inpi')
        const input = this.state.input + 1
        console.log(input)
        this.setState({ input })
    }
    render() {
        const { input } = this.state
        const { chunk } = this
        return <div onClick={chunk}>
            antd
             <Input value={input} />
            <Button>
            </Button>
        </div>
    }
}