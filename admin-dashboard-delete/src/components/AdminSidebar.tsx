import { Box, Stack, Typography } from "@mui/material"

const AdminSidebar = () => {
  return (
    <Box component={"aside"} sx={{bgcolor: (theme) => theme.palette.background.paper, height: "100%", p: 2}} >
      <Typography component={"h2"} variant="h4">Logo.</Typography>

      <Stack direction={"column"}>
        
      </Stack>
    </Box>
  )
}

export default AdminSidebar