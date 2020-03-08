import React, { useState, useEffect } from 'react';

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
        console.log(`update--${count}`)
    }, [count])
    return <div>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
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
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
/**
 * useEffect实现原理
 */
var watchArr;
function useEffect(fn, watch) {
    const hasWatchChange = true;
    hasWatchChange = watchArr && watch.every((val, i) => val === watchArr[i])
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
    const hasWatchChange = state[currentIndex] ? watch.every((val, i) => val === state[currentIndex][i]) : true;
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

    useEffect(() => {
        return function () {
            //componentWillUnmount
        }
    },
        []//componentDidMount //componetnDidUpdate []改变
    )
    return <div>

    </div>
}

/**
 * 请求接口分离
 */

 function useFetchHook(params) {
     
 }