import logo from "./logo.svg";
import "./App.css";
import Name from "./name";
import Nameclass from "./nameclass";

function App({ name }) {
  return (
    <>
      <Nameclass name="Adarsh" />
      <Name name="Raj" />
    </>
  );
}

export default App;
