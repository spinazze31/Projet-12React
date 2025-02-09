import { Routes, Route } from "react-router-dom";
import Home from "../page/home";

function Url() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Url;
