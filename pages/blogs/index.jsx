import HomeLayout from "../../layouts/HomeLayout";
import BlogsDrawer from "./BlogsDrawer";
function index() {
  return (
    <HomeLayout>
      <BlogsDrawer />;
    </HomeLayout>
  );
}
export default index;
