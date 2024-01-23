import { Notifications, Search } from "@mui/icons-material";
import { Avatar, IconButton, InputBase, Stack } from "@mui/material";
import WidgetItem from "../components/WidgetItem";

const widgetContent: Array<widgetContentType> = [
  {
    percent: 40,
    amount: true,
    value: 340000,
    heading: "revenue",
    color: "#0073ff",
  },
  {
    percent: -14,
    amount: false,
    value: 400,
    heading: "users",
    color: "#00c6ca",
  },
  {
    percent: 80,
    amount: false,
    value: 23000,
    heading: "transactions",
    color: "#ffc400",
  },
  {
    percent: 30,
    amount: false,
    value: 1000,
    heading: "products",
    color: "#4c00ff",
  },
];

const Dashboard = () => {
  return (
    <Stack component={"main"} direction={"column"} gap={2}>
      {/* search bar */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        p={2}
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          borderBottom: "2px solid",
          borderColor: (theme) => theme.palette.grey[300],
        }}
      >
        <Search sx={{ marginRight: "1rem", fontSize: "2rem" }} />
        <InputBase
          placeholder="Search for data, users, docs"
          sx={{ px: 1, width: "40rem" }}
        />
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          sx={{ marginRight: "0", marginLeft: "auto" }}
        >
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar />
        </Stack>
      </Stack>

      {/* widget */}
      <Stack
        component={"section"}
        direction={"row"}
        justifyContent={"space-evenly"}
      >
        {widgetContent.map((widgetItem) => (
          <WidgetItem key={widgetItem.heading} widgetItem={widgetItem} />
        ))}
      </Stack>

      {/* graph */}
      <Stack component={"section"}></Stack>

      {/* transaction */}
      <Stack component={"section"}></Stack>
    </Stack>
  );
};

export default Dashboard;
