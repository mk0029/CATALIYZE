import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Loader />
      <div className=" position-relative min-vh-100 d-flex flex-column overflow-hidden">
        {" "}
        <div className="bg_colorlayer position-absolute"></div>{" "}
        <div className="bg_nave_layer position-absolute"></div>
        <div className="my-2" style={{ zIndex: "123", background: "white" }}>
          {" "}
          <NavBar />
        </div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          {" "}
          <Header />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
