import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path ="/pages" element={<Pages/>}/>
          <Route exact path="/serice" element={<Service/>}/>
          <Route exact path="/project" element={<Project/>}/>
          <Route exact path="/blog" element={<Blog/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
