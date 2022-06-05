import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Market from '../components/MarketSection';

const MarketPage = ({setProfile, profile} : {setProfile: React.Dispatch<React.SetStateAction<string>>, profile: string}) => {
  
  return (
    <>
        <Navbar profile={profile} setProfile={setProfile}/>
        <Market />
        <Footer />
    </>
  )
}

export default MarketPage;