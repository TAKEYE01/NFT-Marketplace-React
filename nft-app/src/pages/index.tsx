import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Landing = ({profile} : {profile: string}) => {
  
  return (
    <>
        <Navbar profile={profile}/>
        <HeroSection />
        <Footer />
    </>
  )
}

export default Landing;