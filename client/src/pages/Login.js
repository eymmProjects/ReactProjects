import { Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/login", values);
      localStorage.setItem("ExpenseApp", JSON.stringify(response));
      message.success("Login Successful");
      navigate("/");
    } catch (error) {
      message.error("login failed");
    }
  };

  return (
    <div className="login">
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Expensive Login</h1>
            <hr />

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input />
            </Form.Item>

            <div className="d-flex justify-content-between align-item-center">
              <Link to="/register">
                Not yet Registered , Click Here to register
              </Link>

              <button className="primary" type="submit">
                Login
              </button>
            </div>
          </Form>
        </div>

        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_06a6pf9i.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
