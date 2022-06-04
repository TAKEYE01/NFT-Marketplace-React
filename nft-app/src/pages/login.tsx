import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/LoginSection';

const LoginPage = ({setProfile, profile} : {setProfile: React.Dispatch<React.SetStateAction<string>>, profile: string}) => {
  
  return (
    <>
        <Navbar profile={profile}/>
        <Login setProfile={setProfile}/>
        <Footer />
    </>
  )
}

export default LoginPage;