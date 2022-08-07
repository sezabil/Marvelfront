import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Marvel</h1>

      <div className="header-div">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Characters">
            <li>Characters</li>
          </Link>

          <Link to="/comics">
            <li>Comics</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
