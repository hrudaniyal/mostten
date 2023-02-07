import { collection, getDocs } from "firebase/firestore";
import dynamic from "next/dynamic";
import { db } from "../../config/firebase";
const HomeLayout = dynamic(()=>import('../../layouts/HomeLayout'))
const BlogGrid = dynamic(()=>import('./BlogGrid'))
const BlogsDrawer = dynamic(()=>import('./BlogsDrawer'))
function index({ mostten ,category }) {
 
  return (
    <HomeLayout>
      <BlogsDrawer category={category} />
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

  const catedocRef = collection(db, 'categories')
  const catesnapshot = await getDocs(catedocRef)
  const catedata = catesnapshot.docs.map((res) => ({ ...res.data(), id: res.id }))
  const category = JSON.parse(JSON.stringify(catedata))
  return {
    props: {
      mostten,category
    }
  }
}