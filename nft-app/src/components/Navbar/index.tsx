import React from 'react';
import NavLogoImg from '../../images/NFT_Icon.png';
import {
  Nav,
  NavbarContainer, 
  NavLogo
} from './NavbarElements';

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <img height='40px' src={NavLogoImg} alt="NFT Logo" />
            NFT Marketplace
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;