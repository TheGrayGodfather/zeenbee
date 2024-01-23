import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      component={"main"}
      sx={{ bgcolor: (theme) => theme.palette.background.paper, p: 2 }}
    >
      Dashboard
    </Box>
  );
};

export default Dashboard;
