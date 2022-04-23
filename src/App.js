import './App.css';

// Components
import Navbar from "../src/components/Navbar"
import Header from "../src/components/Header"
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Services/> 
      <Experience/>
    </div>
  );
}

export default App;
