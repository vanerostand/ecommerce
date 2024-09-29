import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  margin-right: 1rem;
  list-style: none;
  padding: 0.5em;
`; 

const StyledLink = styled(Link)`
  & {
    color: #000;
    text-decoration: none;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const NavBar = () => {
  return (
      <NavBarContainer>
        <Menu>
          <Item>
          <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>Products</Item>
          <Item>About</Item>
          <Item>Contact</Item>
        </Menu>
        <Logo>Logo</Logo>
        <Profile>
          <ProfileImage src="https://randomuser.me/api/portraits/lego/5.jpg" alt="profile" />
          <span>John Doe</span>
        </Profile>
      </NavBarContainer>
  );
}

export default NavBar;