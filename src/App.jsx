import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import PlaylistCardItem from "./components/PlaylistCardItem";
import usePlaylists from "./hooks/usePlaylists";

function App() {
  const { playlists, error, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);
  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <PlaylistCardItem
              key={item.id}
              channelTitle={item.channelTitle}
              playlistThumbnail={item.playlistThumbnail}
              playlistTitle={item.playlistTitle}
            />
          ))}
      </Container>
    </>
  );
}

export default App;
