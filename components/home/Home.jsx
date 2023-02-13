import dynamic from 'next/dynamic'
const HomeLayout = dynamic(()=>import('../../layouts/HomeLayout'))
const LandingPage = dynamic(()=>import('./LandingPage'))
 function Home() {
 
  return (
    <HomeLayout sx={{backgroundColor:"primary.main"}} >
         <LandingPage />
    </HomeLayout>
  )
}

export default Home