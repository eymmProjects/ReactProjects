import { Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "ExpenseApp1",
        JSON.stringify({ ...response.data, password: "" })
      );
      message.success("Login Successful");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("login failed");
    }
  };

  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Expensive Login</h1>
            <hr />

            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
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
