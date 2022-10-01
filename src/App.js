import { BrowserRouter,Routes,Route } from "react-router-dom";
import CoinInfo from "./components/coininfo/CoinInfo";
import HistoricalChart from "./components/historicalchart/HistoricalChart";


function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<CoinInfo />} />
      <Route  path="/history/:id" element={<HistoricalChart />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;







