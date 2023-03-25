import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Our from "./components/Our";
import Service from "./components/Service";
import Deals from "./components/Deals";
import Maximum from "./components/Maximum";
import Listen from "./components/Listen";
import Touch from "./components/Touch";
import Constructor from "./components/Constructor";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <Preloader />
      <Header />
      <Our />
      <Service />
      <Deals />
      <Maximum />
      <Listen />
      <Touch />
      <Constructor />
    </>
  );
}

export default App;
