import React,{useState} from 'react';
const App=()=>{
    let time=new Date().toLocaleTimeString();
    const [currTime,setTime]=useState(time);
    const UpdateTime=()=>{
        let time=new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(UpdateTime,1000);
    return(
    <>
        <h1>{time}</h1>
    </>
    )
}
export default App;