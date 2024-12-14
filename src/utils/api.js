import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const convertPlaylist = async (url) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/yt-playlist-convert`, {
      url,
    });
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.detail || "Failed to convert playlist";
    toast.error(errorMessage);
    throw error;
  }
};

export const downloadPlaylistItem = async (playlistId, videoId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/yt-playlist-download/${playlistId}/${videoId}`,
      { responseType: "blob" }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.detail || "Download failed";
    toast.error(errorMessage);
    throw error;
  }
};
