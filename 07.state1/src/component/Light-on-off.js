import {useState} from 'react';

const Light_on_off = () =>{
    const [light,setLight] =useState(true);
    return (
        <>
            {light ? <h2 style={{color:'red'}}>전구ON</h2> : <h2 style={{color:'blue'}}>전구OFF</h2>}
            {/* {light ?  <button onClick={()=>{setLight(false)}}>끄기</button> : <button onClick={()=>{setLight(true)}}>켜기</button>} */}
           <button onClick={()=>{setLight(!light)}}>
            {light ? "끄기":"켜기"}
           </button>
        </>
    )
}

export default Light_on_off;