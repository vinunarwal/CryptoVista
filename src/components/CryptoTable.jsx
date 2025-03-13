import { useEffect, useState } from "react";
import { fetchCryptoPrices } from "../services/cryptoService";

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCryptoPrices();
            setCryptoData(data);
        };
        getData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Live Crypto Prices</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-900 text-white">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3 text-left">Coin</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">24h Change</th>
                            <th className="p-3">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData.length > 0 ? (
                            cryptoData.map((coin, index) => (
                                <tr key={coin.id} className="border-b hover:bg-gray-100">
                                    <td className="p-3 text-center">{index + 1}</td>
                                    <td className="p-3 flex items-center gap-2">
                                        <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                                        <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                                    </td>
                                    <td className="p-3 text-center">${coin.current_price.toLocaleString()}</td>
                                    <td className={`p-3 text-center ${coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}`}>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </td>
                                    <td className="p-3 text-center">${coin.market_cap.toLocaleString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-4">Loading data...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CryptoTable;
