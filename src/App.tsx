import Benefits from "./Components/Benefits";
import Header from "./Components/Header";
import HowItWork from "./Components/HowItWork";
import Navbar from "./Components/Navbar";
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
    </div>
  );
};

export default App;
