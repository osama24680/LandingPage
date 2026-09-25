import "./index.scss";
import logo from "../../assets/logo-dark.png";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navElements">
          <div className="navLogo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navList">
            <li>Home</li>
            <li>Feature</li>
            <li>Video</li>
            <li>Screenshots</li>
            <li>Review</li>
            <li>Reviews</li>
            <li>Pricing</li>
            <li>Download</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
