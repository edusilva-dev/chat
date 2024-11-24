import { Box, Stack, Typography } from "@mui/material";

export default function LayoutHeader() {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        justifyContent: "space-between",
        py: 1.5,
        px: 2,
        bgcolor: "white",
        border: (theme) => `1px solid ${theme.palette.grey[500]}`,
        zIndex: 10,
      }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        <Box
          component="img"
          src="https://thispersondoesnotexist.com/"
          width={40}
          height={40}
          borderRadius="100%"
          bgcolor="grey.800"
        />
        <Stack direction="column" gap={0.5}>
          <Typography variant="body1">David Moore</Typography>
          <Typography variant="body2">last seen 5 mins ago</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
