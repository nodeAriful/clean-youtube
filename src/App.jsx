import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import PlaylistCardItem from "./components/PlaylistCardItem";
import usePlaylists from "./hooks/usePlaylists";

const HomePage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Grid container spacing={2} alignItems="stretch">
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <Grid item xs={12} md={4} lg={4}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistId={item.playlistId}
                channelTitle={item.channelTitle}
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();

  const current = playlists[playlistId];
  console.log("Current", playlists[playlistId]);

  if (!current) return;

  return (
    <Container maxWidth="md">
      <Stack
        sx={{ alignItems: "center", justifyContent: "center", height: "100vh" }}
      >
        <Box>
          <Typography variant="h2">{current.playlistTitle}</Typography>
          <Typography variant="body1">{current.playlistDescription}</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

const NotFound = () => (
  <Container>
    <Stack
      sx={{ alignItems: "center", justifyContent: "center", height: "100vh" }}
    >
      <Box>
        <Typography variant="h1">404</Typography>
        <Typography variant="body2">Page Not Found</Typography>
      </Box>
    </Stack>
  </Container>
);

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
