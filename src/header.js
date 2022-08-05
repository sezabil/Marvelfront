import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Marvel</h1>

      <div className="header-div">
        <Link to="/">Home</Link>

        <Link to="/comics">Comics</Link>
      </div>
    </header>
  );
};

export default Header;
