import React from "react";
import { FaYoutube, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-red-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-center">
        <motion.div
          className="flex items-center space-x-3"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaYoutube className="text-4xl" />
          <h1 className="text-2xl font-bold">YouTube Playlist Converter</h1>
          <FaMusic className="text-3xl" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
