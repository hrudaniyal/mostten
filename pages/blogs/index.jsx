import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import HomeLayout from "../../layouts/HomeLayout";
import BlogGrid from "./BlogGrid";
import BlogsDrawer from "./BlogsDrawer";
function index({ mostten }) {
  return (
    <HomeLayout>
      <BlogsDrawer />
      <br />
      <BlogGrid mostten={mostten} />
    </HomeLayout>
  );
}
export default index;
export const getServerSideProps = async () => {
  const docRef = collection(db, 'mostten')
  const snapshot = await getDocs(docRef)
  const data = snapshot.docs.map((res) => ({ ...res.data(), id: res.id }))
  const mostten = JSON.parse(JSON.stringify(data))
  return {
    props: {
      mostten,
    }
  }
}