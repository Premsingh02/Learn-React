import "./App.css"
import {Title} from "./Title.jsx"

function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
  <div>
    {/* <h1>This is my app component</h1>
    <p>inside app component we have :</p> */}
    <Title/>
    <Title/>
  </div>  
  );
}
 
export default App
