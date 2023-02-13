import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
const HomeLayout = dynamic(() => import("../../layouts/HomeLayout"));
function About() {
  return (
    <HomeLayout>
      <Box>
        <Typography>About us</Typography>
      </Box>
    </HomeLayout>
  );
}
export default About;
export const getServerSideProps = async () => {
  const docRef = collection(db, "mostten");
  const q = query(docRef,limit(1))
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((res) => ({ ...res.data(), id: res.id }));
  const mostten = JSON.parse(JSON.stringify(data));
  console.log(mostten);
  return {
    props: {
      mostten,
    },
  };
};
