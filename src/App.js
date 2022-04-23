import './App.css';

// Components
import Navbar from "../src/components/Navbar"
import Header from "../src/components/Header"
import AboutMe from './components/AboutMe';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Services/> 
    </div>
  );
}

export default App;
