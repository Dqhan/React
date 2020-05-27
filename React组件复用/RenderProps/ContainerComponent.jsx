import React from 'react';
import ShowComponent from './ShowComponent';
export default class ContainerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handlePlus = this.handlePlus.bind(this);
    }

    handlePlus() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div>
            <h1>{`I am a container component.`}</h1>
            {
                this.props.render({
                    count: this.state.count,
                    handlePlus: this.handlePlus
                })
            }
        </div>
    }
}

