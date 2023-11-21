import Home from "./pages/Home";

import Footer from "./components/Footer";

import NavBar from "./components/NavBar";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
