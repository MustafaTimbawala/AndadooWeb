import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/index";
import Projects from "./pages/Projects/index";
import Team from "./pages/Team/Team";
import Donate from "./pages/Donate/Donate";
import Members from "./pages/Members/Members";
import Ambassadors from "./pages/Ambassador/Ambassadors";
import Contact from "./pages/Contact/index";

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
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
