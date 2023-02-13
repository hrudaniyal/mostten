import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function BlogGrid({ mostten }) {
  return (
    <Box
      sx={{ flexGrow: 1 ,backgroundColor:'primary.main'}}
      display="flex"
      justifyContent="center"
      
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      >
        {mostten ? (
          mostten.map((res) => {
            const { id, title, overview, banner } = res;
            return (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                key={id}
                display="flex"
                justifyContent="center"
            
              >
                <Link
                  href={{
                    pathname: `/blogs/view/${title}`,
                    query: { id: id },
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      backgroundColor: "primary.dark",
                      color: "primary.text",
                       
                    }}
                  >
                    <CardActionArea>
                      <Box>
                        <Image
                          width={345}
                          height={210}
                          src={banner}
                          alt={title}
                        />
                      </Box>
                      <CardContent>
                        <Typography gutterBottom variant="h6" height={70}>
                          {title}
                        </Typography>
                        <Typography
                          sx={{ color: "primary.para" }}
                          maxHeight={70}
                          overflow="hidden"
                          variant="body2"
                          color="text.secondary"
                        >
                          {overview}
                        </Typography>
                        <Button variant="outlined" color="secondary" fullWidth sx={{p:"7px",mt:"20px"}}>
                          Read More
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
}
