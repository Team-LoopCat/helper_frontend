import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import Performance from "./pages/main/Performance/Performance";
import PerformanceRegister from "./pages/main/Performance/PerformanceRegister"
import PaperTest from "./pages/main/PaperTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/performanceRegister" element={<PerformanceRegister />} />
        <Route path="/papertest" element={<PaperTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;