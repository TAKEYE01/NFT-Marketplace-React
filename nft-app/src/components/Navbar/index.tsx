import React from 'react';
import NavLogoImg from '../../images/NFT_Icon.png';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  BtnMenu,
  NavBtn,
  NavBtnLink,
  NavBtnSub
} from './NavbarElements';

const Navbar = ({profile, setProfile} : {profile: string, setProfile: React.Dispatch<React.SetStateAction<string>>}) => {

  const onSubmit = () => {
    localStorage.removeItem("user");
    setProfile('');
  }
  
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img style={{ paddingRight: '5px'}} height='40px' src={NavLogoImg} alt="NFT Logo" />
            NFT Marketplace
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <BtnMenu>
            {profile ?
              <>
                <NavBtn>
                    <NavBtnLink to="/profile">{profile}</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnSub onClick={onSubmit}>Logout</NavBtnSub>
                </NavBtn>
              </>
            :
              <>
                <NavBtn>
                  <NavBtnLink to="/login">Login</NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
              </>
            }
          </BtnMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;