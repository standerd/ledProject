import React, { Component } from "react";
import './App.css';



class App extends Component{

  //fetch(
    //"http://192.168.88.130:88/login?username=Dewald&password=password123",
    //{
      //method: "POST",
      //headers: {
        //"Content-Type": "application/json"
      //},
      //body: JSON.stringify({
        //username: "Dewald",
        //password: "password123"
      //})
   // }
 // )


render(){

  //** user login handler
function ledOn (e){

  let userName = e.target.name;

  const data = new FormData();
  data.append("username", userName);
  data.append("password", "password123");

  fetch(
    "http://192.168.88.130:88/login",
    {
      method:"POST",
      body: data
    }
  )
    .then(resData => {
      console.log(resData);
    })
    .catch(err => {
      
    });
};


  return (
    <div className="App">
      <header className="App-header">
       <button name="Dewald" onClick={ledOn}>Switch On</button>
       <button name="Lourika" onClick={ledOn}>Switch Off</button>
       
      </header>
    </div>
  );
}
}  

  

export default App;


