import dynamic from "next/dynamic";
const Home = dynamic(()=>import('../components/home/Home'))
function index() {
  return (
     <Home />
     

  );
}

export default index;
