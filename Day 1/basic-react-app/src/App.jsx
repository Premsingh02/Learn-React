import "./App.css"
// import 

function Description() {
  return <h3>I am the Description!</h3>;
}

function App() {
  return (
  <div>
    {/* <h1>This is my app component</h1>
    <p>inside app component we have :</p> */}
    <Title/>
    <Description/>
    <Title/>
    <Description/>
  </div>  
  );
}
 
export default App
