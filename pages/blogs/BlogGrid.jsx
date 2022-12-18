import { Card, CardActionArea, CardContent,Typography ,Box,Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function BlogGrid({ mostten}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >

        {
          mostten.map((res) => {
            const { id, title ,banner } = res
            return <Grid item xs={4} sm={4} md={4} key={id}>
              <Link href={{
                pathname: `/blogs/view/${title}`,
                query: { id: id }
              }} >
                <Card sx={{ maxWidth: 345 }}>
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
                      <Typography gutterBottom variant="h5" component="div">
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          })
        }
      </Grid>
    </Box >
  );
}
