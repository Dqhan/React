import React, { useState, useEffect } from "react";
import ShowComponent from './ShowComponent';
function ContainerComponent(props) {
    const [count, setCount] = useState(0);
    const handlePlus = () => {
        setCount(count + 1);
    }
    return <div>
        <h1>{`I am a container component.`}</h1>
        {
            props.render({
                count: count,
                handlePlus: handlePlus
            })
        }
    </div>
}


export default ContainerComponent;