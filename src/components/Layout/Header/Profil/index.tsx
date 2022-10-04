import Icon from "@components/Layout/Icon";
import styled from "styled-components";

const Profil: React.FC = () => {
  return (
    <Container>
      <Box>
        <a href="">
          <StyledIcon name={"search"} size={25} color={"black"} />
        </a>
      </Box>
      <Box>
        <a href="">
          <StyledIcon name={"shopping-cart-2"} size={25} color={"black"} />
        </a>
      </Box>
      <Box>
        <a href="/auth">
          <StyledIcon name={"user"} size={25} color={"black"} />
        </a>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  transition: all 0.3s;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledIcon = styled(Icon)``;
export default Profil;
