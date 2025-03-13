import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCryptoPrices } from "../services/cryptoService";

const HeroSection = () => {
    const [topCoins, setTopCoins] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCryptoPrices();
            setTopCoins(data.slice(0, 3)); // Get the top 3 featured coins
        };
        getData();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 text-center rounded-2xl shadow-lg"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold drop-shadow-md"
            >
                Track Crypto Markets in Real-Time
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-2 text-lg text-gray-200"
            >
                Get AI-powered insights & make smarter investments.
            </motion.p>

            <div className="flex justify-center gap-6 mt-6">
                {topCoins.map((coin, index) => (
                    <motion.div
                        key={coin.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white bg-opacity-20 p-5 rounded-xl backdrop-blur-md shadow-md hover:shadow-xl transition-all"
                    >
                        <img src={coin.image} alt={coin.name} className="w-16 h-16 mx-auto" />
                        <h2 className="text-xl font-semibold mt-3">{coin.name} ({coin.symbol.toUpperCase()})</h2>
                        <p className="text-lg font-bold">${coin.current_price.toLocaleString()}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default HeroSection;
