import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This ensures your pages load here */}
      <Footer />
    </>
  );
};

export default App;
