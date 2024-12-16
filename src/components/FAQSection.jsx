import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to render text with styled links using [text](url) syntax
  const renderAnswer = (text) => {
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
    const parts = [];
    let match;
    let lastIndex = 0;

    while ((match = linkRegex.exec(text)) !== null) {
      // Push text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      // Push the link
      parts.push(
        <a
          key={match[2]} // Use URL as key
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 underline inline-flex items-center space-x-1 mx-1"
        >
          <span>{match[1]}</span>
          <FaExternalLinkAlt className="ml-1 text-xs" />
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }

    // Push remaining text after the last link
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <FaQuestionCircle className="text-red-500" />
          <h3 className="font-semibold">{question}</h3>
        </div>
        <FaChevronDown
          className={`
            transform transition-transform duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 mt-4 overflow-hidden"
          >
            <p>{renderAnswer(answer)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is YouTube Playlist Converter?",
      answer:
        "YouTube Playlist Converter is a tool that allows you to download entire YouTube playlists as MP3 files. Simply paste a YouTube playlist URL, and our tool will convert and prepare the audio files for download.",
    },
    {
      question: "How do I get the URL of a YouTube Playlist?",
      answer:
        "If you're watching a video that's part of a [Youtube](https://youtube.com) playlist, click the playlist's title to go to its page. Once you're on the playlist page, click the share button to copy the URL. If you're on a browser, you can also find your playlists in the left menu on YouTube, open the one you want, and copy the link from the address bar.",
    },
    {
      question: "Are there any limitations?",
      answer:
        "Yes, to ensure performance and legal compliance, we limit playlist downloads to 25 items. Each video must be under 1 hour in length. Only public YouTube playlist URLs are supported.",
    },
    {
      question: "Is this legal?",
      answer:
        "Our tool is for personal use only. Downloading copyrighted content without permission may violate terms of service. Always respect copyright laws and artist rights.",
    },
    {
      question: "How long are my converted playlists saved?",
      answer:
        "Converted playlists are temporarily stored for 15 minutes. After this time, you'll need to reconvert the playlist to download the files again.",
    },
    {
      question: "Can I convert individual YouTube video urls?",
      answer:
        "No, for individual video conversion, check out [Mp3Tube](https://mp3tube.io).",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
        <FaQuestionCircle className="mr-3 text-red-500" />
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
