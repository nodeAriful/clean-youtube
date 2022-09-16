import { createStore } from 'easy-peasy';
import playlistModel from './playlistModel';

const store = createStore({
  playlist: playlistModel
});

export default store;