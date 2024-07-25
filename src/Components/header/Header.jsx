import "./Header.css";

const Header = ({ loggedUser }) => {
  return (
    <header className="header-outer-container">
      <div className="header-inner-container">
        <h2>Instagram</h2>
        {!loggedUser ? (
          <p></p>
        ) : (
          <p>Hello</p>
        )}
      </div>
    </header>
  );
};

export default Header;
