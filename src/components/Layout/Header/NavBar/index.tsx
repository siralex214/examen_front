/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    width: 500px;
    max-width: 100%;
    li a {
      font-size: 20px;
      transition: all 0.3s;
      color: #212934;
    }
    li a:hover {
      color: #59ab6e;
    }
  }
`;

export default NavBar;
