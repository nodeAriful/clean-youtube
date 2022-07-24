import { useEffect } from "react";

import usePlaylists from "./hooks/usePlaylists";

function App() {
  const { getyPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getyPlaylistById("PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS");
  }, []);

  console.log(playlists);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
