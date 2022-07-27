import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
  const [state, setState] = useState("");

  const handleSubmit = () => {
    // TODO handle url later

    if (!state) {
      alert("Invalid State");
    } else {
      getPlaylistId(state);
      setState("");
      handleClose(!open);
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add To Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new plylist please insert the playlist id or playlist link.
            Please Make sure the list is correct, Otherwise we wont'able to
            fetch the playlist information
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Playlist Id Or Link"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PlaylistForm;
