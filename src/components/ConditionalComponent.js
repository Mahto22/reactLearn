import { useState } from "react"
import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";

export default function ConditionalComponent(){

    const [display, setDisplay] = useState(true);

    return display ? (<div><h3>This is conditional conponents</h3></div>)
                   :(<div><h3>nothing to see here</h3></div>);
    // let output;
    // if(display){
    //     output = <h3>This is conditional conponents</h3>;
    // }else{
    //     output = <h3>nothing to see here</h3>;
    // }
    
    //return <div>{output}</div>
}

//export default ConditionalComponent;