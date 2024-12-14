import React, { createContext, useState, useContext } from "react";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetPlaylist = () => {
    setPlaylist(null);
    setLoading(false);
    setError(null);
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        setPlaylist,
        loading,
        setLoading,
        error,
        setError,
        resetPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error(
      "usePlaylistContext must be used within a PlaylistProvider"
    );
  }
  return context;
};
