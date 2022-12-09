import HomeLayout from "../../layouts/HomeLayout";
import BlogGrid from "./BlogGrid";
import BlogsDrawer from "./BlogsDrawer";
function index() {
  return (
    <HomeLayout>
      <BlogsDrawer />
      <br/>
      <BlogGrid />
    </HomeLayout>
  );
}
export default index;
