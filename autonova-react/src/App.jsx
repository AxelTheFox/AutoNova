import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";

function App() {

  return (  
    <div className="min-h-screen flex flex-col">
      <HeaderBar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/SellPage" element={<SellPage/>} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
