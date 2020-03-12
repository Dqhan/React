import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from 'react-dom';


function render(params) {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
}

render();


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