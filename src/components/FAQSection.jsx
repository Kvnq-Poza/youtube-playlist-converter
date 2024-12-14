import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

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
            <p>{answer}</p>
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
      question: "Can I download YouTube videos?",
      answer:
        "We only support the conversion of YouTube videos to Audio in 320kbps quality/ For Youtube video downloads, check out Collect Youtube",
    },
    {
      question: "Can I convert individual YouTube video urls???",
      answer: "No, for individual video conversion, check out Mp3Tube.io",
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
