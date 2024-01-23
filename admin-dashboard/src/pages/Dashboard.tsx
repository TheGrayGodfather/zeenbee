import { Box } from "@mui/material"


const Dashboard = () => {
  return (
    <Box component={"main"} sx={{bgcolor: (theme) => theme.palette.primary.main, minHeight: "100%", p: 2}}>Dashboard</Box>
  )
}

export default Dashboard
