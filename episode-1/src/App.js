import"./App.css";

// function App() {
//   return (
//     <div>
//       <User name="saba" age={24} email="salam@saba123" />
//       <User name="ali" age={43} email="none" />
//       <User name="shaqayeq" age={66} email="--" />

//       <Jobs salary={100000000} position="developer" company="Google" />
//       <Jobs salary={200000000} position="front-end developer" company="Amazon" />
//       <Jobs salary={300000000} position="back-end developer" company="Snapp" />
//     </div>
//   );
// }

// const User = (props) =>{
//   return(
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h3>{props.email}</h3>
//     </div>
//   )
// }

// const Jobs =(props) =>{
//   return(
//     <div>
//       {props.salary} ,{props.position},{props.company}
//     </div>
//   )
// }

function App() {

    // <div style={{ color: "red" , fontSize : "30px" }}>
    //     Sabatahmasebi
    // </div>
      
    const age = 22;
   return(
    <div className="App">
      {age > 20 ? <h1>over</h1> : <h1>under</h1>}
      
      {age === 20 && <h1>age is 20</h1>}
    </div>
   )
 
}

export default App;
