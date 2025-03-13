import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Search, Sun, Moon } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <motion.nav
            className="bg-white dark:bg-gray-900 shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    CryptoVista
                </h1>

                <div className="hidden md:flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-2">
                    <Search className="text-gray-500 dark:text-gray-300" size={20} />
                    <input
                        type="text"
                        placeholder="Search coins..."
                        className="bg-transparent outline-none ml-2 text-gray-800 dark:text-white"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleDarkMode} className="text-gray-600 dark:text-white">
                        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button className="md:hidden text-gray-600 dark:text-white" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    className="md:hidden bg-white dark:bg-gray-900 shadow-md p-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <input
                        type="text"
                        placeholder="Search coins..."
                        className="w-full p-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white outline-none"
                    />
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
