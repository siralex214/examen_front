import Header from "@components/Layout/Header";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

interface Iproduit {
  category: string;
  id: number;
  image: string;
  marque: string;
  name: string;
  price: string;
  thumbnail: string;
}

interface Props {
  data: Iproduit;
}

const ProduitPage: NextPage<Props> = ({ data }: Props) => {
  const router = useRouter();
  console.log(data);

  const { id, category, image, marque, name, price, thumbnail } = data;

  console.log(router.query.id);

  return (
    <>
      <Header title="titre" description="pas de description" />
      <Wrapper>
        <ContainerLeft>
          <img src={thumbnail} alt="" />
        </ContainerLeft>
        <ContainerRight>
          <h2>{name}</h2>
          <Row>
            <p>{price}€</p>
            <p>{category}</p>
          </Row>
        </ContainerRight>
        <AddToCard>ajouter au panier</AddToCard>
      </Wrapper>
    </>
  );
};

const AddToCard = styled.button`
  transition: all 0.3s;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: grey;
  padding: 15px;
  font-size: 25px;
  color: white;
  border-radius: 120px;
  font-weight: 900;

  &:hover {
    background-color: black;
  }
`;

const Row = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
`;
const ContainerLeft = styled.div`
  width: 50%;
`;

const ContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

ProduitPage.getInitialProps = async ({ query }) => {
  return await axios
    .get(`http://127.0.0.1:8000/produit/${query.id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return [];
    });
};

export default ProduitPage;
