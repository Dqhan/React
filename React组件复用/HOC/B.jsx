import React from 'react';
import WithHigherOrderComponent from './withHigherOrderComponent';
class B extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'B'
        }
    }

    render() {
        return <React.Fragment>
            <p>{`I am ${this.state.data} component`}</p>
        </React.Fragment>
    }
}


export default WithHigherOrderComponent(B);