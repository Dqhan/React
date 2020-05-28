import { useState, useEffect, useRef, useCallback, useMemo, useReducer, useContext } from "react";

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

// function App(props) {
//   const [count, setCount] = useState(0);
//   const [flag, setFlag] = useState(false);
//   const [text, setText] = useState('');
//   const mount = useRef(null);
//   const refValue = useRef(null);
//   const refCount = useRef(null);
//   const refState = useRef({
//     count: 0,
//     text: ''
//   });
//   const handleCount = useCallback(() => {
//     setCount(refState.current.count + 1);
//   }, []);

// useEffect(() => {
//   console.log('hello app')
// })

// useEffect(() => {
//   console.log('app did ,mount');
// }, [])

// useEffect(() => {
//   if (!mount.current) mount.current = true;
//   else {
//     // refValue.current = count;
//     // refState.current.count = count;
//     Object.assign(refState.current, {
//       count: count,
//       text: text
//     })
//   }
// })

// useEffect(() => {
//   console.log(flag);
// }, [flag])

// const handleFlag = () => {
//   setFlag(!flag);
// }

// useEffect(() => {
//   window.addEventListener('resize', deboune(handleResize));
//   return () => { window.removeEventListener('resize', deboune(handleResize)); }
// }, [])

// const handleResize = () => {
//   console.log(refValue.current);
// }

//   const handleChangeText = useCallback((e) => {
//     setText(e.target.value)
//   }, [])


//   const showCount = useMemo(() => {
//     console.log('show countv oci');
//     return function () {
//       return <p>
//         {count}
//       </p>
//     }
//   }, [count])

//   return (
//     <div>
//       <div>{showCount()}</div>
//       <p>{text}</p>
//       <button onClick={handleCount}>CLick </button>
//       <input type='text' value={text} onChange={handleChangeText} />
//       {/* <button onClick={handleFlag}>Flag</button> */}
//       <MemoChild {...{ count }} />
//     </div>
//   );
// }

// function Child(props) {
//   let { count } = props;
//   useEffect(() => {
//     console.log('i am child component')
//   })
//   return <div>
//     {count}
//   </div>
// }

// var MemoChild = React.memo(Child)

// function deboune(fn) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(fn.bind(this), 1000);
//   }
// }



const Context = React.createContext(null);
function App() {

  const [count, dispath] = useReducer((state, action) => {
    let Map = {
      add: function () {
        return state + 1;
      }
    }

    return Map[action]();
  }, 0)

  const handleCount = () => {
    dispath('add')
  }

  return <div>
    {/* <p>{count}</p> */}
    <button onClick={handleCount}>CLick</button>
    <Context.Provider value={count}>
      <Child />
    </Context.Provider>

  </div>
}

function Child() {
  let count = useContext(Context);
  return <div>
    {count}
  </div>
}

{
  ReactDOM.render(<App />, document.getElementById("app"));
}
