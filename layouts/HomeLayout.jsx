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
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../components/home/Footer";
import Link from "next/link";

import Megamenu from "../components/Megamunu";
import Image from "next/image";
const drawerWidth = 240;
const navItems = ["about", "contact", "blogs"];
const catelist = ["bussiness", "software", "film"];
import logo from "./MOSTTEN_LOGO.svg";
import { Stack } from "@mui/system";
function HomeLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // search bar

  // FOR MOBILE SITE
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "secondary.dark",
        color: "primary.main",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ backgroundColor: "primary.main" }}>
        <Image src={logo} alt="logo " width="100px" height="60px" />
      </Box>

      <Divider />

      <Typography variant="h6" sx={{ textAlign: "left" }}>
        Navigations
      </Typography>

      <Stack spacing={1} sx={{ m: "5px" }}>
        {navItems.map((item) => (
          <Button
            key={item}
            disablePadding
            variant="outlined"
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Link href={`/blogs/category/${item}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Typography sx={{ color: "primary.main" }}>{item}</Typography>
              </ListItemButton>
            </Link>
          </Button>
        ))}
      </Stack>

      <Typography variant="h6" sx={{ textAlign: "left" }}>
        Categories
      </Typography>
      <Stack spacing={1} sx={{ m: "5px" }}>
        {catelist.map((item) => (
          <Button
            key={item}
            disablePadding
            variant="outlined"
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Link href={`/blogs/category/${item}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Typography sx={{ color: "primary.main" }}>{item}</Typography>
              </ListItemButton>
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // FOR DESKTOP SITE
  return (
    // main
    <>
      <Box sx={{ backgroundColor: "primary.main" }}>
        <AppBar component="nav">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
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
              <Link href="/">
                <Image src={logo} alt="logo " width="100px" height="60px" />
              </Link>
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
          </Toolbar>
        </AppBar>

        <Box component="nav" sx={{ backgroundColor: "primary.main" }}>
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
        {/* THE HOME LAYOUT  */}
        <Box component="main" minWidth="100%">
          <Toolbar />
          <Box sx={{ p: 2 }}>{props.children}</Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

HomeLayout.propTypes = {
  window: PropTypes.func,
};

export default HomeLayout;
