import { useState } from "react";

const PortfolioTracker = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [coinName, setCoinName] = useState("");
    const [amount, setAmount] = useState("");

    const addToPortfolio = () => {
        if (!coinName || !amount) return;
        const newCoin = { id: Date.now(), name: coinName, amount: parseFloat(amount) };
        setPortfolio([...portfolio, newCoin]);
        setCoinName("");
        setAmount("");
    };

    const removeFromPortfolio = (id) => {
        setPortfolio(portfolio.filter((coin) => coin.id !== id));
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-center">📈 Portfolio Tracker</h2>
            <p className="text-center text-gray-600">Manage your crypto investments.</p>

            <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
                <input
                    type="text"
                    placeholder="Crypto Name (e.g., Bitcoin)"
                    value={coinName}
                    onChange={(e) => setCoinName(e.target.value)}
                    className="w-full md:w-1/3 p-2 border rounded-lg"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full md:w-1/3 p-2 border rounded-lg"
                />
                <button
                    onClick={addToPortfolio}
                    className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                    Add
                </button>
            </div>

            <ul className="mt-4">
                {portfolio.map((coin) => (
                    <li key={coin.id} className="flex justify-between p-3 bg-gray-100 mt-2 rounded-lg text-sm md:text-base">
                        <span>{coin.name} - {coin.amount}</span>
                        <button onClick={() => removeFromPortfolio(coin.id)} className="text-red-500">❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioTracker;
