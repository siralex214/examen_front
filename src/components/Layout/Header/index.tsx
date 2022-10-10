import Head from "@components/Head";
import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import NavBar from "./NavBar";
import Profil from "./Profil";

interface Props {
  title: string;
  description: string;
}

const Header: React.FC<Props> = ({ description, title }: Props) => {
  return (
    <>
      <Head title={title} description={description} />
      <Container>
        <TopContainer>
          <ContainerLeft>
            <Block>
              <Icon name={"mail"} fill color={"white"} size={15}></Icon>
              <Text href="mailto:blabla@gmail.com">blabla@gmail.com</Text>
            </Block>
            <Block>
              <Icon name={"phone"} fill color={"white"} size={15}></Icon>
              <Text href="tel:02-32-12-15-12">02-32-12-15-12</Text>
            </Block>
          </ContainerLeft>
        </TopContainer>
        <SousContainer>
          <ContainerLeft2 href="/">
            <Title>Watcher</Title>
            <SubTitle>Shop</SubTitle>
          </ContainerLeft2>
          <NavBar />
          <Profil />
        </SousContainer>
      </Container>
    </>
  );
};

const Container = styled.div``;

const TopContainer = styled.div`
  width: 100%;
  background-color: #212934;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  margin-left: 50px;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Text = styled.a`
  color: white;
  font-size: 15px;
  margin-left: 5px;
`;

const SousContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
`;

const Title = styled.p`
  color: #59ab6e;
  font-weight: 900;
  font-size: 50px;
`;

const SubTitle = styled(Title)`
  font-size: 15px;
`;

const ContainerLeft2 = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export default Header;
