
import './App.css';

function App() {
  return (
      <div>
        <User name="saba" age={23} email="saba.tms15@gmail.com" />;
        <User name="ali" age={44} email="none" />;
        <User name="elii" age={66} email="----" />;

        <Jubs  salary={1000000000} position="developer" company="snapp"/>
        <Jubs  salary={2000000000} position="front-end developer" company="google"/>
        <Jubs  salary={3000000000} position="back-end developer" company="Amazon"/>

      </div>
  );
}

const Jubs =(props) =>{
  return(
    <div>
      {props.salary} ,{props.position},{props.company}
    </div>
  )
}

const props ={
  name: "saba",
  age : 23,
  email :"saba.tms15@gmail.com"
}

const User = (props) =>{
  return(
    <div>
      {props.name},
      {props.age},
      {props.email},
    </div>
  )
}

export default App;
