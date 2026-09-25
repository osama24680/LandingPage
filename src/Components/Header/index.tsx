import "./index.scss";
import iPhone from "../../assets/iphone-7-black.png";
const Header = () => {
  return (
    <header>
      <div className="overlayLayer">
        <div className="container">
          <div className="headerContent">
            <div className="headerContentText">
              <h1>This will be the main headline you can edit</h1>
              <p>
                This should be used to tell a story and let your users know a
                little more about your app and it’s use, How can your app
                benefit them?
              </p>
              <form>
                <input type="email" name="email" placeholder="E-Mail Address" />
                <button>Download</button>
              </form>
            </div>
            <div className="headerContentImage">
              <img src={iPhone} alt="iPhone" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
