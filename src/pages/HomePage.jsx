import { Container, Grid } from "@mui/material";
import PlaylistCardItem from "../components/PlaylistCardItem";

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

export default HomePage;
