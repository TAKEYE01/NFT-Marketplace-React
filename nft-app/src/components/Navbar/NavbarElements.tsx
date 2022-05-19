import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(rgba(19, 32, 46, 0.9), rgba(163, 196, 236, 0.55));
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  color: rgb(24, 188, 206);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    transition: all 200ms;
    cursor: pointer;
    transform: scale(.9);
  }

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;