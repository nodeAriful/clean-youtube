import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();

  const current = playlists[playlistId];
  //   console.log("Current", playlists[playlistId]);

  if (!current) return;

  return (
    <Container maxWidth="md" sx={{ mt: 16 }}>
      <Typography variant="h2">{current.playlistTitle}</Typography>
      <Typography variant="body1">{current.playlistDescription}</Typography>
    </Container>
  );
};

export default PlayerPage;
