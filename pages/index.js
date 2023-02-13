import { Container } from "@mui/material";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/home/Home"));
function index() {
  return (
    <Container >
      <Home />;
    </Container>
  );
}

export default index;
