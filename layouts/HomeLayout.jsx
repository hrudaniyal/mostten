import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../components/home/Footer";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Paper } from "@mui/material";
import Megamenu from "../components/Megamunu";
import Image from "next/image";
const drawerWidth = 240;
const navItems = ["about", "contact", "blogs"];
const catelist = ["bussiness", "software", "film"];
import logo from "./MOSTTEN_LOGO.svg";
function HomeLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // FOR MOBILE SITE
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Most Ten
      </Typography>
      <Megamenu />
      <Divider />

      <Typography variant="h6" sx={{ textAlign: "left" }}>
        Navigations
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Paper sx={{ width: "100%", margin: "3px" }} elevation={2}>
              <Link href={`/${item}`}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText secondary={item} />
                </ListItemButton>
              </Link>
            </Paper>
          </ListItem>
        ))}
      </List>
      <hr />
      <Typography variant="h6" sx={{ textAlign: "left" }}>
        Categories
      </Typography>
      <List>
        {catelist.map((item) => (
          <ListItem key={item} disablePadding>
            <Paper sx={{ width: "100%", margin: "3px" }} elevation={2}>
              <Link href={`/blogs/category/${item}`}>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText secondary={item} />
                </ListItemButton>
              </Link>
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // FOR DESKTOP SITE
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "primary.main" }}>
        <AppBar component="nav">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    mr: 2,
                    display: { sm: "none" },
                    color: "secondary.main",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Image src={logo} alt="logo " width="100px" height="60px" />
              </Box>
              {/* Nav links */}
              <Box sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
                <Megamenu />
              </Box>
              <Box
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                alignItems="center"
                justifyContent="center"
              >
                {catelist.map((item) => (
                  <Link href={`/blogs/category/${item}`} key={item}>
                    <Button
                     sx={{
                      color: "primary.text",
                      textTransform: "capitalize",
                    }}
                    >
                      {item}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ display: { xs: "none", sm: "block", ml: "100px" } }}>
                {navItems.map((item) => (
                  <Link href={`/${item}`} key={item}>
                    <Button
                      sx={{
                        color: "primary.text",
                        textTransform: "capitalize",
                      }}
                    >
                      {item}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
            {/* Search bar */}
            <Paper>
              <InputBase
                sx={{ mt: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>

        <Box component="nav" sx={{backgroundColor:'primary.main'}}>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" minWidth="100%" sx={{ p: 2 }}>
          <Toolbar />
          <main>{props.children}</main>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

HomeLayout.propTypes = {
  window: PropTypes.func,
};

export default HomeLayout;
