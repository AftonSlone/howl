import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../store/session";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Menu({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = async () => {
    await dispatch(logout());
  };
  return (
    <Container className="menuContainer">
      <Row className="username">{user.username}</Row>
      <Button variant="primary" className="text-secondary" onClick={() => {history.push(`/user/${user.id}`)}}>
        Manage Businesses
      </Button>
      <Button variant="primary" className="text-secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}
