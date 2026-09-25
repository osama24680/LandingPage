import Benefits from "./Components/Benefits";
import Header from "./Components/Header";
import HowItWork from "./Components/HowItWork";
import Navbar from "./Components/Navbar";
import Reviews from "./Components/Reviews";
import Screenshotss from "./Components/Screenshotss";
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
    </div>
  );
};

export default App;
