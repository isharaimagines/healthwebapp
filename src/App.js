import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Psycho } from "./components/Psycho";
import { Community } from "./components/Community";
import { Self } from "./components/Pages/self";
import { Partners } from "./components/Pages/partners";
import { Child } from "./components/Pages/children";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/psycho" element={<Psycho />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/self" element={<Self />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/child" element={<Child />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
