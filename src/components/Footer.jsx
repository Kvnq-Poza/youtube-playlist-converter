import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaClock, FaFileContract } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <a
            href="https://github.com/kvnq-poza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://www.lenostube.com/en/youtube-playlist-length-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center"
          >
            <FaClock className="mr-2" /> Calculate Playlist Length
          </a>
          <a
            href="mailto:contact@youtubeplaylistconverter.com"
            className="hover:text-gray-300 flex items-center"
          >
            <FaEnvelope className="mr-2" /> Contact
          </a>
          <Link to="/terms" className="hover:text-gray-300 flex items-center">
            <FaFileContract className="mr-2" /> Terms & Privacy
          </Link>
        </div>
        <div className="text-center">
          <p className="text-sm flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="hidden sm:inline">•</span>
            <span>YouTube Playlist Converter. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
