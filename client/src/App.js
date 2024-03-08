import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [bitcoinData, setBitcoinData] = useState({ price: null, lastUpdated: null });
  const [etheriumData, setEtheriumData] = useState({ price: null, lastUpdated: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();
        
        const currentTime = new Date().toLocaleTimeString();

        setBitcoinData({ price: data.bitcoin.usd, lastUpdated: currentTime });
        setEtheriumData({ price: data.ethereum.usd, lastUpdated: currentTime });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="header">
      <div>
        <h2>p2p stock</h2>
      </div>
      <div className="prices">
        <p>Bitcoin: ${bitcoinData.price} | Last Updated: {bitcoinData.lastUpdated}</p>
        <span className="price-gap"></span>
        <p>Ethereum: ${etheriumData.price} | Last Updated: {etheriumData.lastUpdated}</p>
      </div>
    </header>
  );
}

export default App;