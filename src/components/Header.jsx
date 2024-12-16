import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-red-600 text-white py-4 shadow-md px-5">
      <div className="container mx-auto">
        <Link
          to="/"
          className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
        >
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
        </Link>
      </div>
    </header>
  );
};

export default Header;
