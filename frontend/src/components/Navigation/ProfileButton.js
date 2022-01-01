import { Button } from "react-bootstrap";

export default function ProfileButton({ handleClick }) {
  return (
    <Button
      variant="secondary"
      className="text-primary"
      size = "lg"
      onClick={handleClick}
    >
      <i className="fas fa-user"></i>
    </Button>
  );
}
