import React, { useState, useEffect } from "react";


function ShowComponent(props) {
    return <div>
        <p>{`当前计数：${props.count}`}</p>
        <button onClick={props.handlePlus}>plus</button>
    </div>
}

export default ShowComponent;