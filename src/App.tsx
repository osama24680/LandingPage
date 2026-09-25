import Benefits from "./Components/Benefits";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

interface IProps {}
const App = ({}: IProps) => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Benefits />
    </div>
  );
};

export default App;
