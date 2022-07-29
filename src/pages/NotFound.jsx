import { Box, Container, Stack, Typography } from "@mui/material";

const NotFound = () => (
  <Container sx={{ mt: 16 }}>
    <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
      <Box>
        <Typography variant="h1">404</Typography>
        <Typography variant="body2">Page Not Found</Typography>
      </Box>
    </Stack>
  </Container>
);

export default NotFound;
