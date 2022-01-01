import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/session";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProfileButton from "../Navigation/ProfileButton";
import LoginFormPage from "../LoginFormPage";
import SignupFormPage from "../SignupFormPage";
import NewBusinessForm from "../NewBusinessForm";
import NewReviewForm from "../NewReviewForm";
import Menu from "../Navigation/Menu";
import Modal from "../Modal";

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const currentBusiness = useSelector(
    (state) => state.business.selectedBusiness
  );
  const [clicked, setClicked] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [businessModal, setBusinessModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  window.onclick = (e) => {
    if (e.target.className !== "fas fa-user") setClicked(false);
    if (e.target.className === "modalWrapper") {
      setLoginModal(false);
      setBusinessModal(false);
      setSignupModal(false);
      setReviewModal(false);
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Container fluid id="test">
      <Row>
        <Col sm={8}>
          {!user && (
            <NavLink to="/">
              <img
                className="HeaderLogo"
                src="https://i.imgur.com/SzFAJOX.png"
                alt=""
              />
            </NavLink>
          )}
        </Col>
        <Col>
          {!user && (
            <Button
              variant="primary"
              size="lg"
              className="text-secondary"
              onClick={() => setLoginModal(true)}
            >
              Login
            </Button>
          )}
        </Col>
        <Col>
          {!user && (
            <Button
              variant="primary"
              size="lg"
              className="text-secondary"
              onClick={() => setSignupModal(true)}
            >
              Signup
            </Button>
          )}
        </Col>
        <Col>
          {!user && (
            <Button
              variant="primary"
              size="lg"
              className="text-secondary"
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
        <Col md={7}>
          {user && (
            <NavLink to="/">
              <img
                className="HeaderLogo"
                src="https://i.imgur.com/SzFAJOX.png"
                alt=""
              />
            </NavLink>
          )}
        </Col>

        <Col md={2}>
          {user && currentBusiness && user ? (
            <Button
              variant="primary"
              size="lg"
              className="text-secondary"
              onClick={() => setReviewModal(true)}
            >
              Write a Review
            </Button>
          ) : null}
        </Col>

        <Col md={2}>
          {user && user.businessAccount ? (
            <Button
              variant="primary"
              size="lg"
              className="text-secondary"
              onClick={() => setBusinessModal(true)}
            >
              New Business
            </Button>
          ) : null}
        </Col>

        <Col>
          {user && (
            <ProfileButton
              variant="primary"
              text="text-white"
              handleClick={handleClick}
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
      {reviewModal && (
        <Modal component={NewReviewForm} setReviewModal={setReviewModal} />
      )}
    </Container>
  );
}
