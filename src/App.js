// src/App.js
import './App.css';

// Images
import logo from "./images/ironhack-logo-xs.png"
import menu from "./images/menu-top-xs.png"
// Components
import Header from "./components/Header.jsx"
import Paragraph from "./components/Paragraph.jsx"
import Awesome from "./components/Awesome.jsx"
import Icon1 from "./components/Icon1"
import Icon2 from "./components/Icon2"
import Icon3 from "./components/Icon3"
import Icon4 from "./components/Icon4"


function App() {
  return (
    <div className="App">
    <div className="bg-header">
      <img src={logo} alt="" className="logo" />
      <img src={menu} alt="" className="menu" />
      <Header />
      <Paragraph />
      <Awesome />
      </div>
      <div className="img">
      <Icon1 />
      <Icon2 />
      <Icon3 />
      <Icon4 />
      </div>
    </div>
  );
}
export default App;