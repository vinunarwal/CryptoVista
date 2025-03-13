import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CryptoTable from "./components/CryptoTable";
import PortfolioTracker from "./components/PortfolioTracker";
import CryptoChart from "./components/CryptoChart";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <CryptoTable />
      <PortfolioTracker />
      <CryptoChart />
    </div>
  );
}

export default App;
