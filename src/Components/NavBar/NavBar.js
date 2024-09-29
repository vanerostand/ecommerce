import React from "react";
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavBarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavBarMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavBarMenuItem = styled.li`
  margin-right: 1rem;
`;  

const NavBarProfile = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const NavBar = () => {
  return (
      <NavBarContainer>
        <NavBarMenu>
          <NavBarMenuItem>Home</NavBarMenuItem>
          <NavBarMenuItem>Products</NavBarMenuItem>
          <NavBarMenuItem>About</NavBarMenuItem>
          <NavBarMenuItem>Contact</NavBarMenuItem>
        </NavBarMenu>
        <NavBarLogo>Logo</NavBarLogo>
        <NavBarProfile>
          <NavBarProfileImage src="https://randomuser.me/api/portraits/lego/5.jpg" alt="profile" />
          <span>John Doe</span>
        </NavBarProfile>
      </NavBarContainer>
  );
}

export default NavBar;