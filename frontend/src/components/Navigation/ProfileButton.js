
export default function ProfileButton({ handleClick }) {
    return (
      <div className="profileButton" onClick={handleClick}>
        <i className="fas fa-user"></i>
      </div>
    );
  }
