import Benefits from "./Components/Benefits";
import Download from "./Components/Download";
import Header from "./Components/Header";
import HowItWork from "./Components/HowItWork";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Reviews from "./Components/Reviews";
import Screenshotss from "./Components/Screenshotss";
import Subscribe from "./Components/Subscribe";
import WatchDemo from "./Components/WatchDemo";

interface IProps {}
const App = ({}: IProps) => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Benefits />
      <HowItWork />
      <WatchDemo />
      <Screenshotss />
      <Reviews />
      <Pricing />
      <Download />
      <Subscribe />
    </div>
  );
};

export default App;
