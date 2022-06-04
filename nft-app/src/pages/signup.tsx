import Navbar from '../components/Navbar';
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer';

const SignupPage = ({profile, setProfile} : {profile: string, setProfile: React.Dispatch<React.SetStateAction<string>>}) => {
  
  return (
    <>
        <Navbar profile={profile} setProfile={setProfile}/>
        <SignUpSection />
        <Footer />
    </>
  )
}

export default SignupPage;