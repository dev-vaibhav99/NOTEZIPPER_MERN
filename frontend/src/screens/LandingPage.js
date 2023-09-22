import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  let userInfo = "";
  useEffect(() => {
    userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [userInfo]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Note Zipper</h1>
            <p className="subtitle">One safe place for all your notes</p>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  Sign up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
