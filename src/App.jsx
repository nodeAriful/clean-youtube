import { CssBaseline } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import usePlaylists from "./hooks/usePlaylists";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PlayerPage from "./pages/PlayerPage";

const App = () => {
  const { playlists, error, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
