import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useHistory } from "react-router-dom";

const Topbar = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setAdminName(email);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setLoggedIn(false);
    history.push("/login");
    window.location.reload();
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Container>
      <Navbar
        className="bg-body-tertiary"
        style={{
          height: "80px",
        }}
      >
        <Container>
          <Navbar.Brand>PECUNIA</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {loggedIn ? (
              <NavDropdown
                title={`${adminName}`}
                id="admin-dropdown"
                onClick={handleDropdownClick}
                style={{
                  color: "white !important",
                }}
              >
                <NavDropdown.Item eventKey="logout" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Navbar.Text>
                {/* Display login/signup buttons or other authentication logic */}
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Topbar;
