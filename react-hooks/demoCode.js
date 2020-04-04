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

//到目前为止，已经知道了react hook中如何使用state，那么周期函数呢，那么就涉及另一个钩子useEffect，useEffect涉及三个周期函数componentDidMount componentDidUpdate compinentWillUmount
//我们看一个简单的实例
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

/**
 * 实现周期函数
 */
//下面我们来了解一下react hooks的周期函数，他是如何工作的


function App() {
  let [count, setCount] = useState(0);
  useEffect(
    () => {
      //默认每一次渲染都需要执行的方法
      console.log('didmount')
      //如果需要实现componentWillComponent,则return 一个函数即可    
      return function unmount() {
        console.log('unmount')
      }
    }
  )

  let handleSetCount = useCallback(() => {
    setCount((preCount) => {
      let updatedCount = preCount + 1;
      return updatedCount;
    });
  })

  return <React.Fragment>
    {console.log('render')}
    <p>{`${count}`}</p>
    <button onClick={handleSetCount}>Click</button>
  </React.Fragment>
}

//我们可以看一下执行周期
//第一次渲染时候执行 render  didmount
//点击事件执行顺序 render unmount didmount
//不难看出，每一次渲染我们都会执行render进行渲染，然后清除掉上一次的useEffect，然后渲染完成之后重新执行useEffect
//这样通过一个useEffec可以默认执行两个周期函数，也就是当我们需要对组件添加一些需要当组件卸载时候清除掉的功能时候，这个是很方便的，常见的就是setTimeout setIntrval等定时器
//但是比如一个component渲染之后我们通常会发送一个请求来请求数据，然后重写渲染这个组件，这样会造成死循环怎么办，我们可以在useEffect后添加第二个参数

//阻止useEffect每一次都要执行

function App() {
  let [count, setCount] = useState(0);
  useEffect(
    () => {
      //默认每一次渲染都需要执行的方法
      console.log('didmount')
      //如果需要实现componentWillComponent,则return 一个函数即可    
      return function unmount() {
        console.log('unmount')
      }
    },
    [setCount]
  )

  let handleSetCount = useCallback(() => {
    setCount((preCount) => {
      let updatedCount = preCount + 1;
      return updatedCount;
    });
  })

  return <React.Fragment>
    {console.log('render')}
    <p>{`${count}`}</p>
    <button onClick={handleSetCount}>Click</button>
  </React.Fragment>
}

//当传入第二个参数得值不变得时候就会跳过useEffect函数执行

//如何模拟componentDidMount与componentWillUmount,第二个参数我们传一个空数组，这样就可以实现仅当组件渲染跟组件卸载得时候执行


function App() {
  let [count, setCount] = useState(0);
  useEffect(
    () => {
      //默认每一次渲染都需要执行的方法
      console.log('didmount')
      //如果需要实现componentWillComponent,则return 一个函数即可    
      return function unmount() {
        console.log('unmount')
      }
    },
    []
  )

  let handleSetCount = useCallback(() => {
    setCount((preCount) => {
      let updatedCount = preCount + 1;
      return updatedCount;
    });
  })

  return <React.Fragment>
    {console.log('render')}
    <p>{`${count}`}</p>
    <button onClick={handleSetCount}>Click</button>
  </React.Fragment>
}

//不过，这隐藏了一个问题:传递空数组容易出现问题。如果咱们添加了依赖项，那么很容易忘记向其中添加项，如果错过了一个依赖项，那么该值将在下一次运行useEffect时失效，并且可能会导致一些奇怪的问题。
//常见得就是当我们想用父组件调用子组件时候使用得ref,或者我们要获取dom焦点时

function App() {
  let [count, setCount] = useState(0);
  let [value, setValue] = useState('')
  const inputRef = useRef();

  useEffect(
    () => {
      //默认每一次渲染都需要执行的方法
      console.log('didmount')

      //如果需要实现componentWillComponent,则return 一个函数即可    
      return function unmount() {
        console.log('unmount')
      }
    },
    [inputRef]
  )

  let handleSetCount = useCallback(() => {
    setCount((preCount) => {
      let updatedCount = preCount + 1;
      return updatedCount;
    });
  })

  let handleSetValue = function (e) {
    setValue(e.target.value);
  }

  return <React.Fragment>
    {console.log('render')}
    <p>{`${count}`}</p>
    <input
      ref={inputRef}
      value={value}
      onChange={handleSetValue}
    ></input>
    <button
      ref={inputRef}
      onClick={handleSetCount}
    >Click</button>

  </React.Fragment>
}

/**
 * 请求实例
 */

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

/**
 * 实现useState useEffect 
 * 我们知道了useState useEffect怎么使用了，那么我们自己来实现一个简易的
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

var val;
function useState(initVal) {
  let resultVal = val || initVal;
  function setVal(newVal) {
    resultVal = newVal;
    render();
  }
  return [resultVal, setVal]
}

var watchArr = [];
function useEffect(fn, watch) {
  var hasWatchChange = true;
  hasWatchChange = watchArr && watch.every((val, i) => val === watchArr[i])
  if (hasWatchChange) {
    fn();
    watchArr = watch;
  }
}

//useState useEffect结合
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

function render() {
  ReactDOM.render(<App />, document.getElementById('app'))
}

/**
 * useLayoutEffect
 */
//useLayoutEffect与ueeEffect用法是一致得，但是执行时间是不一样
//useLayoutEffect阻塞浏览器渲染  有些涉及UI渲染得需要提前执行得使用
//useEffect不阻塞浏览器渲染



/**
 * useContext
 */
//类组件创建
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <AppContext.Provider value="dark">
        <Target />
      </AppContext.Provider>
    );
  }
}

class Target extends React.Component {
  //通过定义静态属性 contextType 来订阅
  //没有定义是获取不到的
  static contextType = AppContext;
  render() {
    console.log(this.context);
    return <div></div>;
  }
}

function render(params) {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}

//useContext
const AppContext = React.createContext('target');

function App() {
  useEffect(
    () => { },
    []
  );
  return <AppContext.Provider value="dark">
    <Target />
  </AppContext.Provider>;
}

function Target() {
  const value = useContext(AppContext);
  console.log(value);
  return <div></div>;
}

//在需要订阅多个 context 的时候，就更能体现出useContext的优势。传统的实现方式：

function App() {
  return <CurrentUser.Consumer>
    {
      user => <Notifications.Consumer>
        {notifications =>
          <header>
            Welcome back, {user.name}!
              You have {notifications.length} notifications.
          </header>
        }
      </Notifications.Consumer>
    }
  </CurrentUser.Consumer>
}

//react hooks  
function App() {
  const user = useContext(CurrentUser);
  const notifications = useContext(Notifications);

  return (
    <header>
      Welcome back, {user.name}!
      You have {notifications.length} notifications.
    </header>
  );
}
//是不是比传统的要简单的多

/**
 * useReducer
 */
//函数式组件如果涉及到状态管理，我们需要借助redux，那么hooks需要吗，答案也是一样的，简单的状态管理我们可以通过useState来进行管理，如果比较复杂的状态管理呢，react hook给我们提供了方法 useReducer
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

/**
 * useReducer与useContext结合
 */

const TodosDispatch = React.createContext(null);
const TodosState = React.createContext(null);

function TodosApp() {
  const [todos, dispatch] = useReducer(todosReducer);

  return (
    <TodosDispatch.Provider value={dispatch}>
      <TodosState.Provider value={todos}>
        <DeepTree todos={todos} />
      </TodosState.Provider>
    </TodosDispatch.Provider>
  );
}

function DeepChild(props) {
  const dispatch = useContext(TodosDispatch);
  const todos = useContext(TodosState);

  function handleClick() {
    dispatch({ type: 'add', text: 'hello' });
  }

  return (
    <>
      {todos}
      <button onClick={handleClick}>Add todo</button>
    </>
  );
}

/**
 * useCallback
 */
//提升性能优化

//类组件
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
//这样写会导致什么结果呢，就是当渲染的时候react会认为每一次绑定的事件都是新的，从而从新进行计算
//改进如下

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('click')
  }
  render() {
    return <div>
      <p>{`hello~${name}`}</p>
      <button onClick={this.handleClick}>Click</button>
    </div>
  }
}
//我们讲触发函数绑定在this上，来缓存这个方法

//hooks
function App() {
  let [count, setCount] = useState(0);
  return <div>
    <button onClick={() => setCount(1)} ></button>
  </div>
}

//改进如下
function App() {
  let [count, setCount] = useState(0);
  let handleSetCount = useCallback(() => {
    setCount(1);
  })
  return <div>
    <button onClick={handleSetCount} ></button>
  </div>
}
//我们通过useCallback来缓存这个事件达到优化效果

/**
 * useMemo
 */
//提升性能优化
function App(target, target2) {
  const target = useMemo(() => {
    return <Target />
  }, [target])
  const target2 = useMemo(() => {
    return <Target2 />
  }, [target2])
  return <div>
    {target}
    {target2}
  </div>
}
/**
 * React.memo
 */
//提升性能优化
//如果想实现class中的shouldComponentUpdate方法呢 ，区别是它只能比较 props，不会比较 state：
const App = React.mome((target, target2) => {
  const target = useMemo(() => {
    return <Target />
  }, [target])
  const target2 = useMemo(() => {
    return <Target2 />
  }, [target2])
  return <div>
    {target}
    {target2}
  </div>
})

// const Parent = React.memo(({ a, b }) => {
//   // 当 a 改变时才会重新渲染
//   const child1 = useMemo(() => <Child1 a={a} />, [a]);
//   // 当 b 改变时才会重新渲染
//   const child2 = useMemo(() => <Child2 b={b} />, [b]);
//   return (
//     <>
//       {child1}
//       {child2}
//     </>
//   )
// });


/**
 * useRef
 */
//这个就是获取dom层次依赖关系，跟类组件时一个道理

//类组件实现方式
class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return <input ref={this.myRef} type="text" />;
  }
}
//react hooks实现方式
function App() {
  let [value, setValue] = useState('')
  const inputRef = useRef();

  useEffect(
    () => {
    },
    [inputRef]
  )

  let handleSetValue = function (e) {
    setValue(e.target.value);
  }

  return <React.Fragment>
    <input
      ref={inputRef}
      value={value}
      onChange={handleSetValue}
    ></input>

  </React.Fragment>
}