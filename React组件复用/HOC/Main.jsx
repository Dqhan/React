import React from 'react';
import A from './A';
import B from './B';

export default class Main extends React.Component {
    render() {
        return <React.Fragment>
            <A />
            <B />
        </React.Fragment>
    }
}