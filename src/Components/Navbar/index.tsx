import "./index.scss";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import logo from "../../assets/logo-dark.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [listDown, setListDown] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setListDown(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <div className="navIcon" onClick={() => setListDown(!listDown)}>
            {!listDown ? <CiMenuBurger /> : <IoClose className="closeIcon" />}
          </div>
        </div>
        {listDown && (
          <div className="mobilNavElements">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
