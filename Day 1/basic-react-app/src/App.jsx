import "./App.css"
import {Title} from "./Title.jsx"
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox.jsx";


function App() {
  return (
    <>
      <MsgBox userName="Aarav" textColor="yellow" />
      <ProductTab/>
    </>
  );
}
 
export default App
