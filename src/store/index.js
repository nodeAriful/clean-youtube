import { createStore } from 'easy-peasy';
import favoriteModel from './favoriteModel';
import playlistModel from './playlistModel';
import recentModel from './recentModel';

const store = createStore({
  playlists: playlistModel,
  favorite: favoriteModel,
  recent: recentModel
});

export default store;