import { Box, Container } from "@mui/material";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/home/Home"));
const HomeLayout = dynamic(()=>import('../layouts/HomeLayout'))
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../config/firebase";

function index({mostten}) {
  return (
    <HomeLayout>
      <Home mostten={mostten} />;
    </HomeLayout>
  );
}

export default index;
export const getServerSideProps = async () => {
  const docRef = collection(db, "mostten");
  const q = query(docRef, limit(10));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((res) => ({ ...res.data(), id: res.id }));
  const mostten = JSON.parse(JSON.stringify(data));
  return {
    props: {
      mostten,
    },
  };
};
