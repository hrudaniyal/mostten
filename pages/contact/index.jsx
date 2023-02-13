import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const HomeLayout = dynamic(() => import("../../layouts/HomeLayout"));
function index() {
  return (
    <HomeLayout>
      <Box>
        <Typography sx={{ backgroundColor: ".main" ,color:'secondary.main'}}>
          This is contact page
        </Typography>
      </Box>
    </HomeLayout>
  );
}
export default index;
