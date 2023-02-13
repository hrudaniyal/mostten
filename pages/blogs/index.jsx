import { db } from "../../config/firebase";
import dynamic from "next/dynamic";
const HomeLayout = dynamic(() => import("../../layouts/HomeLayout"));
const BlogGrid = dynamic(() => import("./BlogGrid"));
import { collection, getDocs } from "firebase/firestore";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
export default function Category({ category, mostten }) {
  const anchor = "right";
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,

        textAlign: "center",
        backgroundColor: "primary.main",
        color: "primary.text",
        minHeight: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1>CATEGORY</h1>
        <Box sx={{p:'10px'}}>
          {category.map((category) => {
            const { id, cate } = category;
            return (
              <Link href={`/blogs/category/${cate}`} key={id}>
                <ListItem
                  component="div"
                  disablePadding
                  sx={{
                    bgcolor: "primary.dark",
                    mt: "5px",
                    textTransform: "capitalize",
                  }}
                >
                  <ListItemButton sx={{ p: "7px" }}>
                    <ListItemText
                      primary={cate}
                      primaryTypographyProps={{
                        color: "primary.para",
                        fontWeight: "medium",
                        variant: "body2",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </Box>
      </List>
    </Box>
  );

  return (
    <HomeLayout>
      <Box>
        <Button
          onClick={toggleDrawer(anchor, true)}
          variant="outlined"
          color="secondary"
        >
          <MenuIcon mr={3} /> OPEN SIDEBAR
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </Box>
      <br />
      <BlogGrid mostten={mostten} />
    </HomeLayout>
  );
}

export const getServerSideProps = async () => {
  const docRef = collection(db, "mostten");
  const snapshot = await getDocs(docRef);
  const data = snapshot.docs.map((res) => ({ ...res.data(), id: res.id }));
  const mostten = JSON.parse(JSON.stringify(data));

  const catedocRef = collection(db, "categories");
  const catesnapshot = await getDocs(catedocRef);
  const catedata = catesnapshot.docs.map((res) => ({
    ...res.data(),
    id: res.id,
  }));
  const category = JSON.parse(JSON.stringify(catedata));
  return {
    props: {
      mostten,
      category,
    },
  };
};
