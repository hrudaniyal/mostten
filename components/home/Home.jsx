import dynamic from 'next/dynamic'
const HomeLayout = dynamic(()=>import('../../layouts/HomeLayout'))
const LandingPage = dynamic(()=>import('./LandingPage'))
 function Home() {
 
  return (
    <HomeLayout >
         <LandingPage />
    </HomeLayout>
  )
}

export default Home