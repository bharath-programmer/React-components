import { useState } from "react"
import TextBox from "./components/controls/rtextbox/Texbox"

function App() {

  const [textValue, setTextValue] = useState("");

  return (
    <div style={{padding:10}}>
      <h3>1. Text box :</h3>
      <TextBox textBoxValue={textValue} setTextBoxValue={setTextValue} labelText="Username" placeholderText="React" />
    </div>
  )
}

export default App
