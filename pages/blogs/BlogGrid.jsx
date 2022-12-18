import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({ mostten }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >

        {
          mostten.map((res) => {
            console.log(res)
            const { id, title } = res
            return <Grid item xs={4} sm={4} md={4} key={id}>
              <Link href={{
                pathname: `/blogs/view/${title}`,
                query: { id: id }
              }} >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="data:image/jpeg;base64,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"
                      alt="green iguana"
                    />
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
