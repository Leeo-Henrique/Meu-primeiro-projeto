import { useState } from "react";
import "./App.css";
import { Input } from "./components/input/index";
function App() {
  const [plataforma, setPlataforma] = useState([])
  
  return (
    <div className="App">
      <header className="App-header">
        <Input />
      </header>
    </div>
  );
}

export default App;
