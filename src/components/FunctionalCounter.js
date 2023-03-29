import { useState } from "react";

function FunctionalCounter(){
    const [Counter,setCounter] = useState(0);

    const increment = ()=>{
        setCounter(Counter + 1);
    };

    return <div>
        <div>Counter Value: {Counter}</div>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    </div>;
}


export default FunctionalCounter;