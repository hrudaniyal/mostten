import { Avatar, Grid, Typography } from "@mui/material";
import logo from "../../layouts/MOSTTEN_LOGO.svg";
import React from "react";
import Image from "next/image";
import { Box, Container } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Box sx={{mt:4}}>
      <Grid container spacing={2} sx={{ bgcolor: "secondary.dark", p: "7px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5">Films</Typography>

          {["actor", "director", "films"].map((item) => {
            return (
              <Typography
                sx={{ bgcolor: "secondary.dark", m: "5px" }}
                key={item}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography  variant="h5">Bussiness</Typography>
          {["brands", "person", "currency"].map((item) => {
            return (
              <Typography
                sx={{ bgcolor: "secondary.dark", m: "5px" }}
                key={item}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography  variant="h5">Computers</Typography>
          {["computer", "software", "security"].map((item) => {
            return (
              <Typography
                sx={{ bgcolor: "secondary.dark", m: "5px" }}
                key={item}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography  variant="h5">Other Links</Typography>

          {["home", "about", "contact"].map((item) => {
            return (
              <Typography
                sx={{ bgcolor: "secondary.dark", m: "5px" }}
                key={item}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "primary.para",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <Image src={logo} alt="logo " width="100px" height="60px" xs={12} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>@Copywrite</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
              <Avatar>
                <InstagramIcon />
              </Avatar>
              <Avatar>
                <FacebookIcon />
              </Avatar>
              <Avatar>
                <LinkedInIcon />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
