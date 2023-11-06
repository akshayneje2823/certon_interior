import logo from './logo.svg';
import './App.css';
import Home from './component/Pages/Home';
import Navbar from './component/Nav_Foot/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './component/Pages/About';
import Footer from './component/Nav_Foot/Footer';
import Services from './component/Pages/Services';
import Contact from './component/Pages/Contact';
import Projects from './component/pages_iside_Page/Projects';
import Proffessionals from './component/pages_iside_Page/Proffessionals';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/our_projects" element={<Projects />} />
          <Route path="/our_profesionals" element={<Proffessionals />} />
        </Routes>
    <Footer/>
    </div>

    </Router>
  );
}

export default App;
