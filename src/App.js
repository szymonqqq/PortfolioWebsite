import './App.css'
import MainPage from './components/MainPage/MainPage'
import AboutMe from './components/AboutMe'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNav from './components/MobileNav';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
   
    


     <BrowserRouter>
     <MobileNav/>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about_me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
