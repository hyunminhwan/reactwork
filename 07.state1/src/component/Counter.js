import {useState} from 'react';
const Counter= ()=>{
    const [count,setCount] = useState(0);
    const count2=0;
    return (
        // <>
        //     <h1>{count}</h1>
        //     <button onClick={()=>{setCount(count+1)}}>+</button>&emsp;
        //     <button onClick={()=>{setCount(count-1)}}>-</button>
        // </>
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+2)}}>+</button>&emsp;
            <button onClick={()=>{setCount(count-2)}}>-</button>
        </>
    )

}

export default Counter;