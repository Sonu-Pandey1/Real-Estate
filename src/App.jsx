import PWABadge from "./PWABadge.jsx";
import "./App.scss";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/for-buyers" element={<h1>For Buyers </h1>} />
          <Route path="/for-tenants" element={<h1>For Tenants</h1>} />
          <Route path="/for-owners" element={<h1>For Owners</h1>} />
          <Route path="/for-dealers-builders" element={<h1>For Dealers / Builders</h1>} />
          <Route path="/insights" element={<h1>Insights</h1>} />
          <Route path="/post-property" element={<h1>Post Property</h1>} />
          
        </Route>
      </Routes>

      <PWABadge />
    </>
  );
}

export default App;
