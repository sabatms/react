import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div>
    <User name ="saba" age={25} email="sabathm@1377.ir" />

    <User name ="soha" age={30} email="none" />

    <User name ="sara" age={40} email="---" />

    <Job salary={1000000000} position="developer" company="google" />

    <Job salary={2000000000} position="front -end developer" company="youtube" />

    <Job salary={3000000000} position="full stack developer" company="amazon" />

    </div>

  )
}
const User = (props) => {
  return (
    <div>
     <h1>{props.name}</h1>
     <h2>{props.age}</h2>
     <h3>{props.email}</h3>
    </div>
  );
}


const Job =(props)=>{
  return (
    <div>
      {props.salary} ,{props.position} ,{props.company}
    </div>
  )
}
export default App;
