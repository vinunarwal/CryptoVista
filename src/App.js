import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CryptoTable from "./components/CryptoTable";
// import AIInsights from "./components/AIInsights";
import PortfolioTracker from "./components/PortfolioTracker";
import CryptoChart from "./components/CryptoChart";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <CryptoTable />
      {/* <AIInsights /> */}
      <PortfolioTracker />
      <CryptoChart />
    </div>
  );
}

export default App;
