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
import ServiceSingle from './component/pages_iside_Page/ServiceSingle';
import Faq from './component/pages_iside_Page/Faq';
import Blog from './component/pages_iside_Page/Blog';
import Project1 from './component/Recent_projects/project1';
import Project2 from './component/Recent_projects/Project2';
import Project3 from './component/Recent_projects/Project3';
import Project4 from './component/Recent_projects/Project4';
import Blog1 from './component/Pages/Blogs/Blog1';
import Blog2 from './component/Pages/Blogs/Blog2';
import Blog3 from './component/Pages/Blogs/Blog3';
import Blog4 from './component/Pages/Blogs/Blog4';
import Blog5 from './component/Pages/Blogs/Blog5';
import Blog6 from './component/Pages/Blogs/Blog6';

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
          <Route path="/single_service" element={<ServiceSingle />} />
          <Route path="/faq_page" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project1" element={<Project1/> } />
          <Route path="/project2" element={<Project2/>} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path='/blog5' element={<Blog5/>} />
          <Route path='/blog6' element={<Blog6 />} />
        </Routes>
    <Footer/>
    </div>

    </Router>
  );
}

export default App;
