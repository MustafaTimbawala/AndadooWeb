import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Members from "./pages/Members";
import Ambassadors from "./pages/Ambassadors";

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donate" element={<Donate />} /> 
        <Route path="/members" element={<Members/>}/> 
        <Route path="/ambassadors" element={<Ambassadors/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
