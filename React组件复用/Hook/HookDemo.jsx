import { useState, useEffect, useCallback, useRef } from "react";

// function Component1() {
//     const [data, setData] = useState({ name: 'zhangsan', age: 60 });
//     const [count, setCount] = useState(0);
//     const fetchData = () => {
//         new Promise((resolve) => {
//             setTimeout(function () {
//                 resolve({
//                     name: 'dqhan',
//                     age: 28
//                 });
//             }, 3000);
//         })
//             .then(res => {
//                 setData((preData) => {
//                     return { ...preData, ...res };
//                 });
//                 return new Promise((resolve, reject) => {
//                     setTimeout(function () {
//                         reject('其实我是18');
//                     }, 3000)
//                 })
//             })
//             .then(res => {
//                 console.log(res);
//             })
//             .catch(e => {
//                 data.e = e;
//                 setData(data);
//                 console.log('error:', e);
//             })
//     }
//     useEffect(() => {
//         fetchData();
//     }, [])


//     const handleSetCount = () => {

//         setCount(count + 1);
//         // setTimeout(function () {
//         //     setCount(count + 1);
//         // }, 0);
//         // console.log(count);
//     }

//     return <div>
//         <p>{data.name}</p>
//         <p>{data.age}</p>
//         <p>{data.e && data.e}</p>
//         <p>{count}</p>
//         <button onClick={handleSetCount}>Click</button>
//     </div>
// }

// export default Component2;

// function useFetch() {
//     const [data, setData] = useState({ name: 'zhangsan', age: 60 });
//     const fetchData = () => { 
//         new Promise((resolve) => {
//             setTimeout(function () {
//                 resolve({
//                     name: 'dqhan',
//                     age: 28
//                 });
//             }, 3000);
//         })
//             .then(res => {
//                 setData(res);
//                 return new Promise((resolve, reject) => {
//                     setTimeout(function () {
//                         reject('其实我是18');
//                     }, 3000)
//                 })
//             })
//             .then(res => {
//                 console.log(res);
//             })
//             .catch(e => {
//                 // data.e = e;
//                 // setData(data);
//                 console.log(data); // name: 'zhangsan', age: 60
//                 setData((preData) => {
//                     console.log(preData);// name: 'dqhan', age: 28
//                     return { ...preData, ...{ e: e } }
//                 });
//                 console.log('error:', e);
//             })
//     }
//     useEffect(() => {
//         fetchData();
//     }, []);

//     return data;

// }

// function Component2() {
//     let data = useFetch();
//     return <div>
//         <p>{data && data.name && data.name}</p>
//         <p>{data && data.age && data.age}</p>
//         <p>{data && data.e && data.e}</p>
//     </div>
// }

// function Counter() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//         setTimeout(function () {
//             console.log('settimeout count', count);
//         }, 2000)
//     }, [count]);

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>Click me</button>
//         </div>
//     );
// }
// export default Counter;

// class Test extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//         this.onClick = this.onClick.bind(this);
//     }

//     componentDidMount() {
//         document.querySelector('#btn-raw').addEventListener('click', this.onClick);
//     }

//     onClick() {
//         this.setState({ count: this.state.count + 1 });
//         console.log('# this.state', this.state);
//     }

//     handleClick() {
//         setTimeout(() => {
//             this.onClick();
//         });
//     }

//     render() {
//         console.log('componetn render')
//         return <div>
//             <p>{`${this.state.count}`}</p>
//             <button onClick={this.onClick}>Click1</button>
//             <button id='btn-raw'>Click2</button>
//             <button onClick={this.handleClick}>Click3</button>
//         </div>
//     }
// }

// export default Test;


//如果useEffect第一个函数参数直接或者间接用上某个变量，就请把这个变量放在useEffect的第二个参数里。

// function App() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         // 让resize事件触发handleResize
//         window.addEventListener('resize', debounce(handleResize))
//         return () => window.removeEventListener('resize', debounce(handleResize))
//     }, [])

//     const handleResize = () => {
//         // 把count输出
//         console.log(`count is ${count}`)
//     }

//     return (
//         <div className="App">
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <h1>{count}</h1>
//         </div>
//     );
// }

// function debounce(fn) {
//     var timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(fn.bind(this), 1000)
//     }
// }

function App() {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const handleChange = useCallback((e) => {
        setText(e.target.value);
    }, [])

    const handleChange1 = (e) => {
        setText1(e.target.value);
    }

    return <div>
        <p>{showNum()}</p>
        <input type='text' value={text} onChange={handleChange} />
        <MemoChild {...{ text }} />
        <input type='text' value={text1} onChange={handleChange1} />
    </div>
}

function Child(props) {
    const mount = useRef(null);
    useEffect(() => {
        console.log('mount child');
    }, [])
    useEffect(() => {
        if (!mount.current) mount.current = true;
        else {
            console.log('child updated');
        }
    })
    return <div>
        <p>{props.text}</p>
        <p>Child</p>
    </div>
}

const MemoChild = React.memo(Child)



export default App;