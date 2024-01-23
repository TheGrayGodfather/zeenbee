import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  capitalize,
} from "@mui/material";

const WidgetItem = ({ widgetItem }: { widgetItem: widgetContentType }) => {
  const { percent, amount, value, heading, color } = widgetItem;

  return (
    <Paper elevation={3}>
        <Stack
      component={"article"}
      direction={"row"}
      bgcolor={"Background"}
      p={2}
      gap={2}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"10px"}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="caption">{capitalize(heading)}</Typography>
        <Typography component={"h4"} sx={{ fontWeight: "bold" }}>
          {amount ? `$${value}` : value}
        </Typography>
        <Stack
          direction={"row"}
          gap={0.5}
          sx={{
            color:
              percent > 0
                ? (theme) => theme.palette.success.main
                : (theme) => theme.palette.error.main,
            fontWeight: "light",
          }}
        >
          {percent > 0 ? <ArrowUpward /> : <ArrowDownward />}
          <Typography>{percent}%</Typography>
        </Stack>
      </Stack>

      <Stack position={"relative"} p={1}>
        <CircularProgress
          variant="determinate"
          thickness={5}
          sx={{ color: color }}
          value={percent}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" color={color}>
            {percent}%
          </Typography>
        </Box>
      </Stack>
    </Stack>
    </Paper>
  );
};

export default WidgetItem;
