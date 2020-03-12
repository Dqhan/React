import React, { useState, useEffect } from "react";

/**
 * useState
 */
// function Example() {
//     const [count, setCount] = useState(0);
//     const [name, handleChangeName] = useState('');

//     const changeName = () => {
//         if (count === 0) return 'dqhan0';
//         if (count === 1) return 'dqhan1';
//         return 'none';
//     }

//     return <div>
//         <p>You clicked {count} times</p>
//         <p>You name {name}</p>
//         <button onClick={() => setCount(count => { return count + 1 })}>
//             Click me
//         </button>
//         <button onClick={() => handleChangeName(changeName)}>
//             Change Name
//         </button>
//     </div>
// }

// export default Example;

// function logTimeHOC(WrappedComponent, options = { time: true, log: true }) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 index: 0
//             }
//             this.show = 0;
//         }

//         componentDidMount() {
//             options.time && (this.timer = setInterval(() => {
//                 this.setState({
//                     index: ++index
//                 })
//             }, 1000))
//             options.log && console.log('组件渲染完成')
//         }

//         render() {
//             return <WrappedComponent
//                 {...this.state}
//                 {...this.props}
//             />
//         }

//     }
// }

// class InnerLogComponent extends React.Component{
//     render(){
//         return(
//             <div>我是打印日志组件</div>
//         )
//     }
// }
// // 使用高阶组件`logTimeHOC`包裹下
// export default logTimeHOC(InnerLogComponent,{log:true})
// class InnerSetTimeComponent extends React.Component{
//     render(){
//         return(
//             <div>
//                 <div>我是计时组件</div>
//                 <span>{`我显示了${this.props.index}s`}</span>
//             </div>
//         )
//     }
// }
// // 使用高阶组件`logTimeHOC`包裹下
// export default logTimeHOC(InnerSetTimeComponent,{time:true})
// class InnerLogTimeShowComponent extends React.Component{
//     render(){
//         return(
//             <div>
//                 <div>我是日志打印+计时组件</div>
//             </div>
//         )
//     }
// }
// // 使用高阶组件`logTimeHOC`包裹下
// export default logTimeHOC(InnerLogTimeShowComponent)

// function useLogTime(data = { log: true, time: true }) {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         data.log && console.log('组件渲染完成')
//         var timer = null;
//         data.time && (timer = setInterval(() => {
//             setCount(c => { return c + 1 })
//         }))
//         return () => {
//             data.log && console.log('组件即将卸载----')
//             data.time && clearInterval(timer)
//         }
//     })
//     return { count }
// }

// export default function LogTimeShowComponent() {
//     const { count } = useLogTime()
//     return (
//         <div>
//             <div>我是日志打印+计时组件</div>
//             <div>{`我显示了${count}s`}</div>
//         </div>
//     )
// }

/**
 * useState  useEffect demo
 */
function App() {
  var [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`update--${count}`);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
// export default App;
/**
 * useState 实现原理
 */

var val;
function useState(initVal) {
  val = val || initVal;
  function setVal(newVal) {
    val = newVal;
    render();
  }
  return [val, setVal];
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
/**
 * useEffect实现原理
 */
var watchArr;
function useEffect(fn, watch) {
  const hasWatchChange = true;
  hasWatchChange = watchArr && watch.every((val, i) => val === watchArr[i]);
  if (hasWatchChange) {
    fn();
    watchArr = watch;
  }
}

/**
 * useState  useEffect 结合
 */

let state = [];
let currentIndex = 0;
function useState(initVal) {
  state[currentIndex] = state[currentIndex] || initVal;
  function setVal(newVal) {
    state[currentIndex] = newVal;
    render();
  }
  return [state[currentIndex++], setVal];
}
function useEffect(fn, watch) {
  const hasWatchChange = state[currentIndex]
    ? watch.every((val, i) => val === state[currentIndex][i])
    : true;
  if (hasWatchChange) {
    state[currentIndex] = watch;
    currentIndex++;
    fn();
  }
}
/**
 * 实现周期函数
 */

function App() {
  let [count, setCount] = setState(0);

  useEffect(
    () => {
      return function () {
        //componentWillUnmount
      };
    },
    [] //componentDidMount //componetnDidUpdate []改变
  );
  return <div></div>;
}

/**
 * fetch请求
 */

function App() {
  let [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(config);
      setData(result);
    };

    fetchData();
  }, []);

  return <div></div>;
}

/**
 * 请求接口分离
 */

function useFetchHook(config, watch) {
  let [data, setData] = useState(null);
  let [status, setStatus] = useState(0);
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const result = await axios(config);
          setData(result);
          setStatus(0);
        } catch (e) {
          setStatus(1);
        }
        fetchData();
      };
    },
    watch ? [...watch] : []
  );

  return { data, status };
}

//react hook  讲解
/**
 * 传统组件两种封装方式 函数式  类模式
 */

/**
 * 类形式
 */

//无状态组件

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>{this.props.name}</p>
    </div>
  }
}

function renderApp() {
  let appProps = {
    name: 'dqhan'
  }
  ReactDOM.render(
    <App  {...appProps} />,
    document.getElementById('app')
  )
}

renderApp();

//状态管理
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeName() {
    this.setState({
      name: '我变了'
    })
  }

  render() {
    return (
      <React.Fragment>
        <p> {`hello~${this.state.name}`} </p>
        <button onClick={this.handleChangeName}></button>
      </React.Fragment>
    );
  }
}

/**
 * 函数式
 */
//无状态函数式组件
function App(props) {
  return <p>{`hello! ${props.name}`}</p>
}

function renderApp() {
  let appProps = { name: "dqhan" };
  ReactDOM.render(<App {...appProps} />, document.getElementById("app"));
}

//添加状态管理
//函数式本来就是无状态的，如果非要添加状态管理，我们需要借助redux的帮助，集中管理状态

/**
 * react hook
 */

//react hook无状态组件其实跟函数式是一样的
function App(props) {
  return <div>
    <p>{`hello~${props.name}`}</p>
  </div>
}

//但是react hook可以管理自己的状态，有自己的函数钩子，这点相比要函数式显然效果更好，不需要借助redux，这就是我们为啥要在前面提到函数式编程涉及状态管理问题，就是要在这里跟react hook做个比较
function App() {
  let [name, setName] = useState('dqhan');
  return <div>
    <p>{`hello~${name}`}</p>
    <button onClick={() => setName('我变了')}>Click</button>
  </div>;
}

//但是现在的代码还是不够规范，不规范在哪里，我们讲函数直接绑定在onClick上，这样每一次render都会告诉react我重新绑定了一次函数，导致没必要的渲染逻辑
//这种效率低下的代码同样在class模式里也常见，如下
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <p>{`hello~${name}`}</p>
      <button onClick={() => { console.log('click') }}>Click</button>
    </div>
  }
}
//那么如何改进
//class模式解决方案

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click~')
  }

  render() {
    return <div>
      <button onClick={this.handleClick}></button>
    </div>
  }
}

/**
* hook解决方案
*/

function App() {
  let [name, setName] = useState('dqhan');
  let handleChangeName = useCallback(() => {
    setName('我变了')
  })
  return <div>
    <p>{`hello~${name}`}</p>
    <button onClick={handleChangeName}>Click</button>
  </div>;
}

//好了到这里我们大概了解hook的useState用法了。很简单，多了一个useState让函数式创建类有了自己的持久状态
//那么在函数式里面我们如何做到class组件中的setState呢

function App(props) {
  let [name, setName] = useState('dqhan');
  let handleChangeName = useCallback(() => {
    setName(preState => {
      let updatedValues = {
        newValue: '我变了'
      }
      return { ...{ preState }, ...updatedValues }
    })
  })
  function click1(params) {
    setName('我变了1')
  }
  return <div>
    <p>{`hello~${name}`}</p>
    <button onClick={handleChangeName}>Click1</button>
    <button onClick={click1}>Click2</button>
  </div>;
}

//这中方式已经实现了状态整合，但是我们如果模拟一个state呢，来统一管理state呢
function App(props) {
  let [state, setState] = useState({
    name: 'dqhan'
  });
  let handleChangeName = useCallback(() => {
    setState(preState => {
      let updatedValues = {
        name: '我变了'
      }
      return { ...preState, ...updatedValues }
    })
  })
  return <div>
    <p>{`hello~${state.name}`}</p>
    <button onClick={handleChangeName}>Click</button>
  </div>;
}

//到目前为止，已经知道了react hook中如何使用state，那么周期函数呢，那么就涉及另一个钩子useEffect
function App() {
  var [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`update--${count}`);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

