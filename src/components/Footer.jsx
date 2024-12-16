import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
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
            Calculate Playlist Length
          </a>
          <a
            href="mailto:contact@youtubeplaylistconverter.com"
            className="hover:text-gray-300 flex items-center"
          >
            <FaEnvelope className="mr-2" /> Contact
          </a>
        </div>
        <p className="text-sm flex justify-center items-center m-auto space-x-2">
          <span>© {new Date().getFullYear()}</span>
          <img
            src="/logo.png"
            alt="Youtube Playlist Converter logo"
            className="h-7 w-9"
          />
          <span>YouTube Playlist Converter. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
