import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Hinnasto from "./pages/Hinnasto";
import UKK from "./pages/UKK";
import Meista from "./pages/Meista";
import Yhteystiedot from "./pages/Yhteystiedot";
import Yrityksille from "./pages/Yrityksille";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/palvelu/:slug" element={<ServicePage />} />
        <Route path="/hinnasto" element={<Hinnasto />} />
        <Route path="/usein-kysyttya" element={<UKK />} />
        <Route path="/meista" element={<Meista />} />
        <Route path="/yhteystiedot" element={<Yhteystiedot />} />
        <Route path="/yrityksille" element={<Yrityksille />} />
      </Route>
    </Routes>
  );
}
