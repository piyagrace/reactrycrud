
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Posts from "./pages/Posts";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
