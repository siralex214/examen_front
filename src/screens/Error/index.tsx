import styled from "styled-components";

import ROUTES from "@constants/routes";
import Head from "@components/Head";
import { APP } from "@constants/main";
import useTranslation from "@hooks/useTranslation";
import Link from "next/link";

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Head title={t("error.head.title")} />
      <Title>{t("error.title")}</Title>
      <Description>
        {t("error.desc")} <Link href={ROUTES.HOME}>{APP.NAME}</Link>.
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 60px - 200px);
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;

const Description = styled.h2`
  margin-top: 30px;

  a {
    color: #59ab6e;
    font-weight: bold;
  }
`;

export default Error;
