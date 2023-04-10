import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// ExpenseApp1

// function ProtectedRoute(props){
//   if(localStorage.getItem(''));
// }

export default App;
