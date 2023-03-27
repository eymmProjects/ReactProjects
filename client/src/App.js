import "./App.css";
import { Button } from "antd";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>

      <Home></Home>
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
