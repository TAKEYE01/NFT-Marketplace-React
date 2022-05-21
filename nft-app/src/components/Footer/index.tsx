import React from 'react';
import NavLogoImg from '../../images/NFT_Icon.png';
import {animateScroll as scroll} from 'react-scroll';
import {
  FaTwitter,
  FaDiscord
} from 'react-icons/fa';
import { 
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLink,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialMedia
} from './FooterElements';

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Quick Links</FooterLinkTitle>
                                <FooterLink to="/signup"
                                >Sign Up</FooterLink>
                                <FooterLink to="/login"
                                >Login</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                          <img style={{ paddingRight: '5px'}} height='40px' src={NavLogoImg} alt="NFT Logo" />
                          NFT Marketplace
                        </SocialLogo>
                        <WebsiteRights>
                            NFT Marketplace © {new Date().getFullYear()} All Rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
  )
}

export default Footer
