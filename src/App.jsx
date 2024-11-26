import PWABadge from "./PWABadge.jsx";
import "./App.scss";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Buyers from "./Pages/for-Buyers/Buyers.jsx";
import Tenants from "./Pages/for-Tenants/Tenants.jsx"
import Owners from "./Pages/for-owners/Owners.jsx"
import DealersBuilders from "./Pages/for-dealers-builders/DealersBuilders"
import Insights from "./Pages/insights/Insights.jsx"
import ListProperty from "./Pages/for-postProperty/ListProperty.jsx"
import LoginRegister from "./Pages/for-login-register/LoginRegister"
import HeroC from "./Components/HeroC.jsx";
import Rent from "./Pages/rent/Rent.jsx";
import Pg from "./Pages/pgCoLiving/Pg.jsx"
import Plots from "./Pages/plots/Plots.jsx"
import Commercial from "./Pages/commercial/Commercial.jsx"
import Footer from "./Components/Footer.jsx";


function App() {
  return (
    <>
      <Navbar />
      {/* <HeroC/> */}
       {/* Hero Section changes dynamically */}
       <Routes>
        <Route path="/" element={<HeroC  />} />
        <Route path="/rent" element={<HeroC />} />
        <Route path="/commercial" element={<HeroC />} />
        <Route path="/pg-coliving" element={<HeroC/>} />
        <Route path="/plots" element={<HeroC />} />
      </Routes>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/for-buyers" element={<Buyers/>}/>
          <Route path="/for-tenants" element={<Tenants/>} />
          <Route path="/for-owners" element={<Owners/>} />
          <Route path="/for-dealers-builders" element={<DealersBuilders/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/list-property" element={<ListProperty/>} />
          {/* <Route path="/" element={<ListProperty/>} /> */}
          <Route path="/rent" element={<Rent/>} />
          <Route path="/commercial" element={<Commercial/>} />
          <Route path="/pg-coliving" element={<Pg/>} />
          <Route path="/plots" element={<Plots/>} />
          <Route path="/login-register" element={<LoginRegister/>}/>
        </Route>
      </Routes>
      <Footer/>

      <PWABadge />
    </>
  );
}

export default App;

