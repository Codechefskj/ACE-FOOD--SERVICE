import { useState } from "react";

const Profile=(props)=>{
  const [count , setcount]= useState(0)
  return(
  <div>
    <h1>this website created by sambhav jha</h1>
    <h2>name : {props.name}</h2>
    <h2>count : {count}</h2>
    <button onClick={()=>{
      setcount(1);
    }}>setcount</button>
  </div>
  );
}
export default Profile;