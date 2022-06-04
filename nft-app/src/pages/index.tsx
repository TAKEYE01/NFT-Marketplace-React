import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Landing = ({profile, setProfile} : {profile: string, setProfile: React.Dispatch<React.SetStateAction<string>>}) => {
  
  return (
    <>
        <Navbar profile={profile} setProfile={setProfile}/>
        <HeroSection />
        <Footer />
    </>
  )
}

export default Landing;