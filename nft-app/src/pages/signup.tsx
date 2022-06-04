import Navbar from '../components/Navbar';
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer';

const SignupPage = ({profile} : {profile: string}) => {
  
  return (
    <>
        <Navbar profile={profile}/>
        <SignUpSection />
        <Footer />
    </>
  )
}

export default SignupPage;