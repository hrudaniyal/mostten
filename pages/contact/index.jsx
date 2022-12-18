// import HomeLayout from "../../layouts/HomeLayout";
import dynamic from "next/dynamic";
const HomeLayout = dynamic(() => import('../../layouts/HomeLayout'))
function index() {
  return (
    <HomeLayout>
      <div>This is contact page</div>
    </HomeLayout>
  );
}
export default index;
