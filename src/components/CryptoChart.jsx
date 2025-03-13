import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoChart = ({ coinId = "bitcoin" }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
                );
                const prices = response.data.prices.map((entry) => ({
                    x: new Date(entry[0]).toLocaleDateString(),
                    y: entry[1],
                }));
                setChartData({
                    labels: prices.map((p) => p.x),
                    datasets: [
                        {
                            label: "Price (USD)",
                            data: prices.map((p) => p.y),
                            borderColor: "#4A90E2",
                            backgroundColor: "rgba(74, 144, 226, 0.2)",
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching chart data:", error);
            }
        };

        fetchChartData();
    }, [coinId]);

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h2 className="text-2xl font-bold text-center">📊 Historical Price Trends</h2>
            <p className="text-center text-gray-600">View past 7 days' price trends.</p>

            {chartData ? (
                <div className="mt-4">
                    <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            ) : (
                <p className="text-center mt-4">Loading chart...</p>
            )}
        </div>
    );
};

export default CryptoChart;
