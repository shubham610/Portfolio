import Home from "./components/Home";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <SocialLinks />
      <Contact />
    </div>
  );
}

export default App;
