import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './component/navbar/NavbarMain';
import Header from './component/header/Header';
import AboutUs from './component/aboutUs/AboutUs';
import Services from './component/services/Services';
import ContactUs from './component/contactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Header/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
    </div>
  );
}

export default App;
