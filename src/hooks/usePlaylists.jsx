import { useEffect, useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/Storage";

const STORAGE_KEY = "cy__playlist_state";

const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorites: [],
};

const usePlaylists = () => {
  const [state, setState] = useState(INIT_STATE);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setLoading(true);

    try {
      const playlist = await getPlaylist(playlistId);
      console.log(playlist);
      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (e) {
      setError(e.response?.data?.error?.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorite = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlaylistByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };
  return {
    playlists: state.playlists,
    favorites: getPlaylistByIds(state.favorites),
    recentPlaylists: getPlaylistByIds(state.recentPlaylists),
    getPlaylistById,
    addToFavorite,
    addToRecent,
    error,
    loading,
  };
};

export default usePlaylists;
