import styled from "styled-components";

const Featured: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <BoxLeft>
          <Title>Watcher Shop</Title>
          <SubTitle>Votre boutique de montre en ligne.</SubTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam
            debitis eos sed facilis esse, aliquid sit consequatur, doloremque
            numquam distinctio cupiditate dolorem aperiam voluptatum unde
            voluptas non? Itaque ipsam dolorum nesciunt quidem! Quia culpa ad
            voluptate. Cupiditate doloribus omnis optio nobis fugiat. Dolore
            odio fugiat saepe tenetur, facilis error.
          </Description>
        </BoxLeft>
        <BoxRight>
          <img
            src="https://www.bclconcept.fr/uploads/media/product_catalog/0001/11/thumb_10714_product_catalog_large.png"
            alt="img_accueil"
          />
        </BoxRight>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  background-color: #efefef;
  height: 85vh;
`;

const Wrap = styled.div`
  width: 1000px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxLeft = styled.div``;

const Title = styled.h1`
  color: #59ab6e;
`;

const SubTitle = styled.h2`
  font-weight: 400;
`;

const BoxRight = styled.div``;

const Description = styled.p`
  max-width: 500px;
`;

export default Featured;
