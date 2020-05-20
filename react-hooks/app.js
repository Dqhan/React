import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import ReactDOM from 'react-dom';


// const AppContext = React.createContext('target');

// function useFetch() {
//     const [data, setData] = useState({ name: 'zhangsan', age: 60 });
//     const fetchData = () => {
//         new Promise((resolve) => {
//             setTimeout(function () {
//                 resolve({
//                     name: 'dqhan',
//                     age: 28
//                 });
//             }, 1000);
//         })
//             .then(res => {
//                 setData(res);
//                 return new Promise((resolve, reject) => {
//                     setTimeout(function () {
//                         resolve({
//                             name: 'xiaoming',
//                             age: 27
//                         });
//                     }, 1000)
//                 })
//             })
//             .then(res => {
//                 setData(res);
//                 return new Promise((resolve, reject) => {
//                     setTimeout(function () {
//                         reject('其实我18');
//                     }, 1000)
//                 })
//             })
//             .catch(e => {
//                 // data.e = e;
//                 // setData(data);
//                 console.log(data);
//                 // data.e = e;
//                 // setData(data);
//                 // setData((preData) => {
//                 //     return { ...preData, ...{ e: e } }
//                 // });
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

// function Component2() {
//     let [flag, setFlag] = useState(false);
//     let [state1, setState1] = useState(1);
//     if (flag) {
//         let [state2, setState2] = useState(2);
//     }
//     let [state3, setState3] = useState(3);
//     let handleChangeState1 = () => {
//         setState1(state1 + 1);
//     }
//     let handleChangeState2 = () => {
//         setState2(state2 + 1);
//     }
//     let handleChangeState3 = () => {
//         setState3(state3 + 1);
//     }

//     let handleSetFlag = () => {
//         setFlag(!flag)
//     }

//     return <div>
//         <p>{`${state1}`}</p>
//         {
//             flag && <p>{`${state2}`}</p>
//         }
//         <p>{`${state3}`}</p>
//         <button onClick={handleChangeState1}>State1</button>
//         <button onClick={handleChangeState2}>State2</button>
//         <button onClick={handleChangeState3}>State3</button>
//         <button onClick={handleSetFlag}> SetFlag </button>
//     </div>
// }

// useState(0)
function Component2() {
    let [count, setCount] = useState(0);
    function handleSetCount() {
        setCount(count + 1);
        // setTimeout(function () {
        //     console.log(count);
        // }, 1000)
        setTimeout(function () {
            setCount('dqhna');
        }, 1000)

        setTimeout(function () {
            console.log(count);
        }, 2000)
    }

    useEffect(() => {

    })

    return <div>
        <p>{`${count}`}</p>
        <button onClick={handleSetCount}>Click</button>
    </div>
}

function render(params) {
    ReactDOM.render(
        <Component2 />,
        document.getElementById('app')
    )
}

render();
