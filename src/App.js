import "./App.css";
import Banner from "./Pages/Home/Banner";
import BannerBottom from "./Pages/Home/BannerBottom";
import NavbarComponent from "./Pages/Shared/NavbarComponent";

function App() {
  return (
    <div className='App'>
      <NavbarComponent />
      <Banner />
      <BannerBottom />
    </div>
  );
}

export default App;
