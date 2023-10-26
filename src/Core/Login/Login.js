import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/auth/loginAdmin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const res = await response.json();
        localStorage.setItem("email", res.user.email);
        history.push("/");
        window.location.reload();
      } else {
        setError("Invalid email or password. Please try again.");
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div class="mainDev">
      <div class="center">
        <h1>Login</h1>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div class="txt_field">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <span></span>
              <label>Email</label>
            </div>
            <div class="txt_field">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <input name="submit" type="Submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
