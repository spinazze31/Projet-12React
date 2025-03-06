import { Routes, Route } from "react-router-dom";
import Home from "../page/home";

function Url() {
  return (
    <>
      <Routes>
        <Route path="/Projet-12React/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Url;
