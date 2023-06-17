import Link from "next/link";
import styled from "styled-components";

export const NavbarLayout = styled.nav`
    position:fixed;
    width:100vw;
    background-color: #f5f5f5;
    padding: 16px;
    
`
export const NavbarList = styled.ul`
    list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`

export const NavbarItem = styled.li`
  margin-right: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #0070f3;
  }
`;