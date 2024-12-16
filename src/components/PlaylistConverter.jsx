import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaSpinner } from "react-icons/fa";
import { convertPlaylist } from "../utils/api";
import { usePlaylistContext } from "../context/PlaylistContext";
import PlaylistItems from "./PlaylistItems";
import toast from "react-hot-toast";

const PlaylistConverter = () => {
  const [url, setUrl] = useState("");
  const { playlist, setPlaylist, loading, setLoading, setError } =
    usePlaylistContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url.includes("youtube.com/playlist")) {
      toast.error("Please enter a valid YouTube playlist URL");
      return;
    }

    setLoading(true);
    setError(null); // Reset any previous errors
    try {
      const result = await convertPlaylist(url);

      if (result && result.items && result.items.length > 0) {
        setPlaylist(result);
        toast.success("Playlist converted successfully!");
      } else {
        toast.error("No items found in the playlist");
        setError("No playlist items were retrieved");
      }
    } catch (error) {
      console.error("Playlist conversion error:", error);
      setPlaylist(null);
      setError(error.response?.data?.detail || "Failed to convert playlist");
      toast.error(error.response?.data?.detail || "Playlist conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center border-2 border-red-500 rounded-lg overflow-hidden">
          <FaYoutube className="text-red-500 text-2xl ml-3" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube Playlist URL"
            className="flex-grow p-3 outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`
              px-4 py-3 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }
            `}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Convert"}
          </button>
        </div>
      </motion.form>

      {loading && (
        <div className="text-center mt-8">
          <FaSpinner className="animate-spin text-4xl mx-auto text-red-500" />
          <p className="mt-4 text-gray-600">Converting playlist...</p>
        </div>
      )}

      {playlist && <PlaylistItems playlist={playlist} />}
    </div>
  );
};

export default PlaylistConverter;
