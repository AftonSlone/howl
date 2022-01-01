import { Button } from "react-bootstrap";

export default function ProfileButton({ handleClick, variant, text }) {
  return (
    <Button variant={variant} className={text} size="lg" onClick={handleClick}>
      <i className="fas fa-user"></i>
    </Button>
  );
}
