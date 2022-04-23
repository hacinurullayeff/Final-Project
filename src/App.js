import './App.css';

// Components
import Navbar from "../src/components/Navbar"
import Header from "../src/components/Header"
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
