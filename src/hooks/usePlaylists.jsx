import React, { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favourites: [],
  });

  const getyPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }
    let result = await getPlaylist(playlistId);
  

    let cid, ct;

    result = result.map((item) => {
        
      const {
        title,
        description,
        thumbnails: { medium },
        channelTitle,
        channelId,
      } = item.snippet;

      if (!cid) {
        cid = channelId;
      }
      if (!ct) {
        ct = channelTitle;
      }

      return {
        title,
        description,
        thumbnails: medium,
        channelTitle,
        channelId,
        contentDetails: item.contentDetails,
      };
    });

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: {
          items: result,
          playlistId: playlistId,
          channelId: cid,
          channelTitle: ct,
        },
      },
    }));
  };

  const addToFavourite = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favourites: [...prev, playlistId],
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
    favourites: getPlaylistByIds(state.favourites),
    recentPlaylists: getPlaylistByIds(state.recentPlaylists),
    getyPlaylistById,
    addToFavourite,
    addToRecent,
  };
};

export default usePlaylists;
