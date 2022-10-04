import Icon from "@components/Layout/Icon";
import styled from "styled-components";

const Profil: React.FC = () => {
  return (
    <Container>
      <Box>
        <StyledIcon name={"search"} size={25} color={"black"} />
      </Box>
      <Box>
        <StyledIcon name={"shopping-cart-2"} size={25} color={"black"} />
      </Box>
      <Box>
        <StyledIcon name={"user"} size={25} color={"black"} />
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
