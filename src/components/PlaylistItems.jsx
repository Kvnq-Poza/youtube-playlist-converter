import React, { useState } from "react";
import { FaDownload, FaSpinner, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { downloadPlaylistItem } from "../utils/api";
import toast from "react-hot-toast";

const PlaylistItems = ({ playlist }) => {
  const [downloadingItems, setDownloadingItems] = useState({});

  const handleDownload = async (item) => {
    // Check if it's a private video
    if (item.is_private) {
      toast.error("Cannot download private video");
      return;
    }

    // Fallback for undefined filename
    const filename = item.filename || `${item.title}.mp3`;

    setDownloadingItems((prev) => ({ ...prev, [item.video_id]: true }));

    try {
      const blob = await downloadPlaylistItem(
        playlist.playlist_id,
        item.video_id
      );

      const url = window.URL.createObjectURL(
        new Blob([blob], { type: "audio/mpeg" })
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // Use the fallback filename
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      // Revoke the blob URL to free up memory
      window.URL.revokeObjectURL(url);

      toast.success(`Downloaded: ${item.title}`);
    } catch (error) {
      toast.error("Download failed");
    } finally {
      setDownloadingItems((prev) => ({ ...prev, [item.video_id]: false }));
    }
  };

  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {playlist.items.map((item) => (
        <motion.div
          key={item.video_id}
          className={`
            bg-white shadow-md rounded-lg overflow-hidden 
            ${item.is_private ? "opacity-50" : ""}
          `}
          whileHover={{ scale: item.is_private ? 1 : 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Thumbnail */}
          <div className="relative h-48">
            {item.is_private ? (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <FaLock className="text-white text-3xl" />
              </div>
            ) : item.thumbnail ? (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-center px-2">
                  No Thumbnail Available
                </span>
              </div>
            )}
          </div>

          {/* Video Details */}
          <div className="p-4 flex justify-between items-center">
            <div className="flex-grow pr-4 min-w-0">
              <h3
                className={`
                  font-semibold text-lg truncate 
                  ${item.is_private ? "text-gray-500" : ""}
                `}
                title={item.title}
              >
                {item.is_private ? "Private Video" : item.title}
              </h3>
              <p className="text-gray-600 truncate">
                {item.is_private
                  ? "Cannot access video details"
                  : `Duration: ${item.duration}`}
              </p>
            </div>
            <button
              onClick={() => handleDownload(item)}
              disabled={item.is_private || downloadingItems[item.video_id]}
              className={`
                flex items-center justify-center 
                px-3 py-2 rounded 
                ${
                  item.is_private
                    ? "bg-gray-300 cursor-not-allowed"
                    : downloadingItems[item.video_id]
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }
              `}
            >
              {downloadingItems[item.video_id] ? (
                <FaSpinner className="animate-spin" />
              ) : item.is_private ? (
                <FaLock />
              ) : (
                <FaDownload />
              )}
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PlaylistItems;
