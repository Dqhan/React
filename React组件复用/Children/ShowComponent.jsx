export default ShowComponent;

function ShowComponent(props) {
    return <div>
        <p>{`当前计数:${props.count}`}</p>
        <button onClick={props.handlePlus}>plus</button>
    </div>
}

class ShowComponent extends React.Component {
    constructor(props) {
        super(props);
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
            <p>{`当前计数：${this.state.count}`}</p>
            <button onClick={this.handlePlus}>plus</button>
        </div>
    }
}