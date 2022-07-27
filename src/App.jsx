import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import PlaylistCardItem from "./components/PlaylistCardItem";
import usePlaylists from "./hooks/usePlaylists";

function App() {
  const { playlists, error, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);
  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ my: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />
        <Grid container spacing={2} alignItems="stretch">
          {playlistArray.length > 0 &&
            playlistArray.map((item) => (
              <Grid item xs={12} md={4} lg={4}>
                <PlaylistCardItem
                  key={item.id}
                  channelTitle={item.channelTitle}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
