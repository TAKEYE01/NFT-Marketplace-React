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
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {

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
            <NavBtn>
                <NavBtnLink to="/login">Login</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavBtn>
          </BtnMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;