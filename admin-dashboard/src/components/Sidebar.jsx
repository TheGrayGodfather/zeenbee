import { Box } from "@mui/material"


const Sidebar = () => {
  return (
    <Box component={"aside"} sx={{bgcolor: (theme) => theme.palette.primary.main, minHeight: "100%", p: 2}}>Sidebar</Box>
  )
}

export default Sidebar
