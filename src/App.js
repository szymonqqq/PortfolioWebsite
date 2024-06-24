import './App.css'
import MainPage from './components/MainPage/MainPage'
import AboutMe from './components/AboutMe'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNav from './components/Nav/MobileNav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PcNav from './components/Nav/PcNav';
function App() {
  return (
    <div className="App">
   
    


     <BrowserRouter>
     {window.innerWidth<1024?<MobileNav/>:<PcNav/>}
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about_me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
