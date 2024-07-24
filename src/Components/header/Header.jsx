import "./Header.css";

const Header = ({ loggedUser }) => {
  return (
    <header className="column header">
      <div className="header-inner-container">
        <h2>Instagram</h2>
        {!loggedUser ? (
          <p></p>
        ) : (
          <p>Hello {loggedUser.user.username}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
