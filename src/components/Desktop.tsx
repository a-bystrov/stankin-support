import Audiences from "./Audiences/Audiences";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Schedules from "./Schedules/Schedules";
import MainPage from "./MainPage";
import Contracts from "./Contracts/Contracts";
import Support from "./Support";

export default function Desktop() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/audiences" element={<Audiences />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}
