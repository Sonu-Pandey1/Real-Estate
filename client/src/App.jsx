
import PWABadge from "./PWABadge.jsx";
import "./App.scss";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import HeroC from "./Components/HeroC.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import Buyers from "./Pages/for-Buyers/Buyers.jsx";
import Tenants from "./Pages/for-Tenants/Tenants.jsx";
import Owners from "./Pages/for-owners/Owners.jsx";
import DealersBuilders from "./Pages/for-dealers-builders/DealersBuilders.jsx";
import Insights from "./Pages/insights/Insights.jsx";
import ListProperty from "./Pages/for-postProperty/ListProperty.jsx";
import LoginRegister from "./Pages/for-login-register/LoginRegister.jsx";
import Rent from "./Pages/rent/Rent.jsx";
import Pg from "./Pages/pgCoLiving/Pg.jsx";
import Plots from "./Pages/plots/Plots.jsx";
import Commercial from "./Pages/commercial/Commercial.jsx";
import SearchPage from "./Pages/search/SearchPage.jsx";
import SingalPage from "./Pages/search/SingalPage.jsx";
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/profile/Profile.jsx";
import ProfileUpdatePage from "./Pages/profile/ProfileUpdatePage.jsx";
import NewPostPage from "./Pages/profile/NewPostPage.jsx";
// import { singlePageLoader } from "../lib/Loaders.js";

function App() {
  return (
    <>
      <Navbar />

      {/* Dynamic Hero Section */}
      <Routes>
        <Route path="/" element={<HeroC type="home" />} />
        <Route path="/rent" element={<HeroC type="rent" />} />
        <Route path="/commercial" element={<HeroC type="commercial" />} />
        <Route path="/pg-coliving" element={<HeroC type="pg" />} />
        <Route path="/plots" element={<HeroC type="plots" />} />
      </Routes>

      {/* Main Routes */}
      <Routes>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Static Pages */}
        <Route path="/for-buyers" element={<Buyers />} />
        <Route path="/for-tenants" element={<Tenants />} />
        <Route path="/for-owners" element={<Owners />} />
        <Route path="/for-dealers-builders" element={<DealersBuilders />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:id" element={<SingalPage />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/:id" element={<SingalPage/>} />
        <Route path="/profile/update" element={<ProfileUpdatePage/>}/>
        <Route path="/profile/addPost" element={<NewPostPage/>}/>

        {/* Rent, Commercial, PG, and Plots */}
        <Route path="/rent" element={<Rent />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/pg-coliving" element={<Pg />} />
        <Route path="/plots" element={<Plots />} />
      </Routes>

      <Footer />
      <PWABadge />
    </>
  );
}

export default App;





