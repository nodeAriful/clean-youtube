import { Container, Grid } from "@mui/material";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import PlaylistCardItem from "../components/PlaylistCardItem";

const playlistID = "PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS";

const HomePage = ({ playlistArray }) => {
  const playlist = useStoreActions((actions) => actions.playlists);

  useEffect(() => {
    playlist.getPlaylist(playlistID);
  }, []);
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Grid container spacing={2} alignItems="stretch">
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <Grid item xs={12} md={4} lg={4} key={item.channelId}>
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

export default HomePage;
