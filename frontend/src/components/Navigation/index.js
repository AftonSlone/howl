import "./Navigation.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileButton from "./ProfileButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import Modal from "../Modal";
import Menu from "./Menu";
import NewBusinessForm from "../NewBusinessForm";

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [businessModal, setBusinessModal] = useState(false);

  window.onclick = (e) => {
    if (e.target.className !== "fas fa-user") setClicked(false);
    if (e.target.className === "modalWrapper") {
      setBusinessModal(false);
      setLoginModal(false);
      setSignupModal(false);
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <Container fluid id="test">
      <Row>
        <Col md={{ offset: 8 }}>
          {!user && (
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={() => setLoginModal(true)}
            >
              Login
            </Button>
          )}
        </Col>

        <Col>
          {!user && (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setSignupModal(true)}
            >
              Signup
            </Button>
          )}
        </Col>

        <Col>
          {!user && (
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                dispatch(login({ credential: "demo", password: "password" }));
              }}
            >
              Demo
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col id="test2" sm={2} md={{ offset: 9 }}>
          {user && user.businessAccount ? (
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={() => setBusinessModal(true)}
            >
              New Business
            </Button>
          ) : null}
        </Col>
        <Col sm={1}>
          {user && (
            <ProfileButton
              handleClick={handleClick}
              variant="secondary"
              text="text-primary"
            />
          )}
        </Col>
      </Row>
      {clicked && <Menu user={user} />}
      {loginModal && (
        <Modal component={LoginFormPage} setLoginModal={setLoginModal} />
      )}
      {signupModal && (
        <Modal component={SignupFormPage} setSignupModal={setSignupModal} />
      )}
      {businessModal && (
        <Modal
          component={NewBusinessForm}
          setBusinessModal={setBusinessModal}
        />
      )}
    </Container>
  );
}
