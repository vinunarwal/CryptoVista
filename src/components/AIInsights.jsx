import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIInsights = () => {
    const [analysis, setAnalysis] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = "AIzaSyC6Pxz1_rtji6HsF_PHT2xFlhGYTUsfoiI"; // Replace with your Gemini API Key
    const genAI = new GoogleGenerativeAI(API_KEY);

    const getAIInsights = async () => {
        setLoading(true);
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = "Analyze Bitcoin market trends and predict price movement for the next 7 days.";
            const result = await model.generateContent(prompt);
            const response = await result.response;
            setAnalysis(response.text());
        } catch (error) {
            setAnalysis("Error fetching AI insights.");
            console.error(error);
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h2 className="text-2xl font-bold text-center">📊 AI-Powered Crypto Insights</h2>
            <p className="text-center text-gray-600">Get AI-driven predictions and risk analysis.</p>

            <div className="text-center mt-4">
                <button
                    onClick={getAIInsights}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? "Analyzing..." : "Get AI Insights"}
                </button>
            </div>

            {analysis && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800">
                    <h3 className="font-semibold">AI Prediction:</h3>
                    <p>{analysis}</p>
                </div>
            )}
        </div>
    );
};

export default AIInsights;
