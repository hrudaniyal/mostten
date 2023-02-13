import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Paper } from "@mui/material";
import Link from "next/link";

export default function Megamenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const catelist = ["bussiness", "software", "film"];
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ background: "#999" }}
      >
        Menu
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Paper fullWidth label="fullWidth" id="fullWidth" sx={{ width: 200 }}>
          {catelist.map((item) => {
            return (
              <Link href={`/blogs/category/${item}`} key={item}>
                <Paper
                  elevation={2}
                  display="flex"
                  justifyContent="center"
                  alignItems="center" 
                  sx={{width:150}}
                >
                  <MenuItem sx={{  margin: "5px", textTransform: "capitalize" }}>
                    {item}
                  </MenuItem>
                </Paper>
              </Link>
            );
          })}
        </Paper>
      </Menu>
    </div>
  );
}
