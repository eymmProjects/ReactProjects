import "./App.css";
import { Button } from "antd";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/test";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
