import React from 'react';

export default function WithhigherOrderComponent(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log('component is mounted.')
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}