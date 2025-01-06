import FormWrapper from "./cmponents/FormWrapper"
import NameContext from "./cmponents/NameContext"
import NavBar from "./cmponents/NavBar"
import { useState } from "react"
const App = () => {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
    <NavBar />
    <FormWrapper />
  </NameContext.Provider> 
   )
}

export default App