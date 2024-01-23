import {
  Avatar,
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Grid container>
      {/* sidebar */}
      <Grid item lg={2} p={2} height={"100vh"}>
        <Stack direction={"column"} gap={2}>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Skeleton
              variant="rectangular"
              height={"40px"}
              width={"80%"}
              sx={{ borderRadius: "20px" }}
              animation="pulse"
            />
          </Stack>

          <Stack direction={"column"} p={2}>
            {[1, 2, 3].map((keyItem) => (
              <Stack key={keyItem} direction={"column"} my={2}>
                <Typography variant="h4">
                  <Skeleton variant="text" height={"30px"} />
                </Typography>

                <MenuList>
                  {[4, 5, 6].map((keyItem) => (
                    <ListItem key={keyItem}>
                      <ListItemIcon>
                        <Skeleton
                          variant="circular"
                          height={"25px"}
                          width={"25px"}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Skeleton variant="text" height={"20px"} />
                      </ListItemText>
                    </ListItem>
                  ))}
                </MenuList>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Grid>

      {/* main */}
      <Grid item lg={10}>
        <Stack direction={"column"} height={"100vh"} p={2} gap={2}>
          <Stack direction={"row"} gap={2}>
            {[7, 8, 9].map((paperItem) => (
              <Paper
                key={paperItem}
                elevation={3}
                sx={{ width: "40rem", height: "10rem", mt: 2, p: 2 }}
              >
                <Skeleton variant="rectangular" height={"100%"} />
              </Paper>
            ))}
          </Stack>

          <Stack direction={"row"} gap={2}>
            {[10, 11].map((mainItem) => (
              <Box
                key={mainItem}
                m={2}
                p={4}
                width={"40rem"}
                height={"30rem"}
                sx={{ bgcolor: (theme) => theme.palette.grey[50] }}
              >
                <Skeleton variant="rectangular" width={"100%"} height="20rem" />
                
                <Stack direction={"row"} mt={2} gap={2}>
                  <Skeleton variant="circular">
                    <Avatar />
                  </Skeleton>
                  <Skeleton variant="text" width={"100%"} />
                </Stack>

                <Skeleton variant="text" width={"100%"} />
                <Skeleton variant="text" width={"80%"} />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoadingSkeleton;
