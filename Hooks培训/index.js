import { useState, useEffect } from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleCount = this.handleCount.bind(this);
//   }

//   componentDidMount() {
//     // console.log("component is did mount");
//   }

//   handleCount() {
//     // this.state.count++;
//     // this.setState({
//     // //   count: this.state.count + 1,
//     // });
//     // setTimeout(
//     //   function () {
//     //     this.setState({
//     //       count: this.state.count + 1,
//     //     });
//     //   }.bind(this)
//     // );
//     setTimeout(this.fn.bind(this));
//   }
//   fn() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//     console.log(this.state);
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleCount}> CLick </button>
//       </div>
//     );
//   }
// }

// UI = f(state);

function App(props) {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  
  useEffect(()=>{
    console.log('hello app')
  })

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCount}>CLick </button>
    </div>
  );
}

{
  ReactDOM.render(<App />, document.getElementById("app"));
}
