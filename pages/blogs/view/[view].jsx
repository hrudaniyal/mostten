import { Container } from "@mantine/core";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import dynamic from "next/dynamic";
import Image from "next/image";
import { db } from "../../../config/firebase";
const HomeLayout = dynamic(() => import("../../../layouts/HomeLayout"));
function Blogview({ blog }) {
  const { title, banner, overview, subcontent, conclusion } = blog;
  return (
    <HomeLayout>
      <Container>
        <Box>
          <Typography variant="h2" color="primary.text">
            {title}
          </Typography>
          <Typography style={{ mt: 5, mb: 5 }} color="primary.para">
            {overview}
          </Typography>
          {blog ? (
            <Box>
              <Image
                width={1920}
                height={1080}
                objectFit="cover"
                src={banner}
                alt={title}
                priority
              />
            </Box>
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
        </Box>

        <Stack spacing={2}>
          {subcontent.map((item) => {
            const { image, heading, content } = item;

            return (
              <Grid
                sx={{ backgroundColor: "primary.dark", p: 4 }}
                key={{ heading }}
                container
              >
                <Grid item xs={8}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: "secondary.main" }}>
                          H
                        </Avatar>
                      </ListItemAvatar>
                      <Typography
                        color="primary.text"
                        sx={{ fontSize: "2em", textTransform: "capitalize" }}
                      >
                        {heading}
                      </Typography>
                    </ListItem>
                  </List>
                  {/* <Box sx={{ display: "flex" }} spacing={2}>
                    <Avatar sx={{ bgcolor: 'secondary.main'}} >
                      N
                    </Avatar>
                    <Typography
                      color="primary.text"
                      variant="h5"
                      sx={{ mb: 3, textTransform: "uppercase" }}
                    ></Typography>
                  </Box> */}

                  <Typography color="primary.para">{content}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Image src={image} alt={heading} width={300} height={350} />
                </Grid>
              </Grid>
            );
          })}
        </Stack>
        <Typography variant="h5" color="primary.text">
          CONCLUSION
        </Typography>
        <Typography style={{ mt: 5, mb: 5 }} color="primary.para">
          {conclusion}
        </Typography>
      </Container>
    </HomeLayout>
  );
}
export default Blogview;

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const docRef = doc(db, "mostten", id);
  const data = await getDoc(docRef);
  const blog = JSON.parse(JSON.stringify(data.data()));
  return {
    props: {
      blog,
    },
  };
};
