import React from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButton

} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
          <img style={{ objectFit: 'contain', maxHeight: '100%' }} src={require("../../images/nftmarket.png")} alt="Hero Background" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Trade NFTs<br />Earn Rewards</HeroH1>
        <HeroP>The leading marketplace for trading, selling, and creating NFTs. Rewarding our fellow Web 3 communities with NFT Tokens.</HeroP>
        <HeroButton to="/market">View Marketplace</HeroButton>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;