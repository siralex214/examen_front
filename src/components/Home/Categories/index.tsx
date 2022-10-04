import styled from "styled-components";
import axios from "axios";
import React, { useEffect } from "react";

interface ICategory {
  id: number;
  name: string;
  image: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = React.useState<ICategory[] | []>([]);
  let width: number;

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/best-category").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Container>
      <Title>Meilleures catégories</Title>
      <GroupCategories>
        {categories &&
          categories.map(({ id, name, image }: ICategory, i) => {
            switch (i) {
              case 0:
                width = 100;
                break;

              case 1:
                width = 225;
                break;
              case 2:
                width = 173;
                break;

              default:
                break;
            }

            return (
              <Box href={`/category/${id}`} key={i}>
                <StyledImg persoWidth={width} src={image} alt="" />
                <TitleCategory>{name}</TitleCategory>
                <ButtonCategory>Go Shop</ButtonCategory>
              </Box>
            );
          })}
      </GroupCategories>
      <StyledLink href="all-cat">Voir toutes les catégories</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;

const GroupCategories = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

const Box = styled.a`
  text-align: center;
`;

const StyledImg = styled.img<{ persoWidth: number }>`
  width: ${({ persoWidth }) => persoWidth}px;
`;

const TitleCategory = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const ButtonCategory = styled.button`
  background-color: #59ab6e;
  border-color: #56ae6c;
  border: 1px solid transparent;
  text-decoration: none;
  color: white;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 10px;
`;

const StyledLink = styled.a`
  margin-top: 50px;
  color: black;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;

export default Categories;
