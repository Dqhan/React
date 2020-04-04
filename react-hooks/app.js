import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import ReactDOM from 'react-dom';


const AppContext = React.createContext('target');

function App() {
    useEffect(
        () => { },
        []
    );
    return <div>
        <Target />
    </div>;
}

function Target() {
    const value = useContext(AppContext);
    console.log(value);
    return <div></div>;
}


function render(params) {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
}

render();
