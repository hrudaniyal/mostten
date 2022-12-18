import { collection, getDocs } from "firebase/firestore";
import dynamic from "next/dynamic";
import { db } from "../../config/firebase";
const HomeLayout = dynamic(()=>import('../../layouts/HomeLayout'))
const BlogGrid = dynamic(()=>import('./BlogGrid'))
const BlogsDrawer = dynamic(()=>import('./BlogsDrawer'))
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