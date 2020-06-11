import React from 'react';

class CommonPage extends React.Component {
    render() {
        return <div>
            <div>common page</div>
            <div>{this.props.children}</div>
        </div>
    }
}
export default CommonPage
