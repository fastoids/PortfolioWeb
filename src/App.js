import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './component/navbar/NavbarMain';
import Header from './component/header/Header';
import AboutUs from './component/aboutUs/AboutUs';
function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Header/>
      <AboutUs/>
    </div>
  );
}

export default App;
