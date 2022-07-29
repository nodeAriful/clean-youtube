import { Link, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PlaylistForm from "../PlaylistForm";

const Navbar = ({ getPlaylistById }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getPlaylistId = (playlistId) => {
    getPlaylistById(playlistId);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar>
            {" "}
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h3">Clean Youtube</Typography>
              </Link>
              <Link
                href="https://stacklearner.com"
                target={"_blank"}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="body1">Stack Learner</Typography>
              </Link>
            </Stack>
            <Button onClick={handleOpen} variant="contained">
              Add Playlist
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              getPlaylistId={getPlaylistId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
