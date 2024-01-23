import {
  BarChart,
  Dashboard,
  Gamepad,
  LocalActivity,
  People,
  PieChart,
  RequestPage,
  ShoppingBag,
  Timeline,
  Timer,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const menuContent: menuContentType = [
  {
    heading: "Dashboard",
    list: [
      {
        url: "/admin/dashboard",
        text: "Dashboard",
        Icon: Dashboard,
      },
      {
        url: "/admin/product",
        text: "Product",
        Icon: ShoppingBag,
      },
      {
        url: "/admin/customer",
        text: "Customer",
        Icon: People,
      },
      {
        url: "/admin/transaction",
        text: "Transaction",
        Icon: RequestPage,
      },
    ],
  },

  {
    heading: "Charts",
    list: [
      {
        url: "/admin/chart/bar",
        text: "Bar",
        Icon: BarChart,
      },
      {
        url: "/admin/chart/pie",
        text: "Pie",
        Icon: PieChart,
      },
      {
        url: "/admin/chart/line",
        text: "Line",
        Icon: Timeline,
      },
    ],
  },

  {
    heading: "Apps",
    list: [
      {
        url: "/admin/app/stopwatch",
        text: "Stopwatch",
        Icon: Timer,
      },
      {
        url: "/admin/app/coupon",
        text: "Coupon",
        Icon: LocalActivity,
      },
      {
        url: "/admin/app/toss",
        text: "Toss",
        Icon: Gamepad,
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();

  // return boolean true if any url is active
  const checkActiveURL = (url: string): boolean => {
    return location.pathname.includes(url);
  };

  return (
    <Box
      component={"aside"}
      sx={{
        minHeight: "100%",
        p: 2,
      }}
    >
      <Typography variant="h5" component={"h2"}>
        Logo.
      </Typography>

      <Stack direction={"column"}>
        {menuContent.map((item) => (
          <Stack key={item.heading} direction={"column"} sx={{ marginTop: 2 }}>
            <Typography component={"h5"} textTransform={"uppercase"} sx={{color: (theme) => theme.palette.text.secondary}}>{item.heading}</Typography>

            <MenuList sx={{ paddingTop: 2, gap: 2 }}>
              {item.list.map((itemInsideList) => (
                <Link
                  key={itemInsideList.url}
                  to={itemInsideList.url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem
                    sx={{
                      bgcolor: checkActiveURL(itemInsideList.url)
                        ? (theme) => theme.palette.primary.light
                        : (theme) => theme.palette.background.default,

                      color: checkActiveURL(itemInsideList.url)
                        ? (theme) => theme.palette.secondary.main
                        : "inherit",
                    }}
                  >
                    <ListItemIcon>
                      <itemInsideList.Icon
                        color={
                          checkActiveURL(itemInsideList.url)
                            ? "secondary"
                            : "primary"
                        }
                      />
                    </ListItemIcon>
                    <ListItemText>{itemInsideList.text}</ListItemText>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
