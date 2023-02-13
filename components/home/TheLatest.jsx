import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
 

export default function TheLatest({mostten}) {
  return (
    <Box>
      <Typography variant="h5" bgcolor="secondary.dark">
        The Latest
      </Typography>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {mostten.map((item) => {
          const { id, title, image } = item;
          return (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar src={image}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={title} secondary="July 20, 2014" />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
