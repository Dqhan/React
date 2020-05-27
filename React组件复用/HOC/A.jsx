import React from 'react';
import WithHigherOrderComponent from './withHigherOrderComponent';


class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'A'
        }
    }

    render() {
        return <React.Fragment>
            <p>{`I am ${this.state.data} component`}</p>
        </React.Fragment>
    }
}

export default WithHigherOrderComponent(A)