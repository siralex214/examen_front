import Header from "@components/Layout/Header";
import ROUTES from "@constants/routes";
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
interface Data {
  data: Iproduit[];
}
interface Props {
  data: Data;
}

const ShopPage: NextPage<Props> = ({ data }: Props) => {
  const router = useRouter();

  return (
    <>
      <Header title={"Boutique"} description={"voici la boutique en ligne."} />
      <Wrapper>
        {data.data.map((produit, i) => (
          <div key={i} className="container page-wrapper">
            <div className="page-inner">
              <div className="row">
                <div className="el-wrapper">
                  <div
                    className="box-up"
                    onClick={() => {
                      router.push(ROUTES.ONE_PRODUCT + produit.id);
                    }}
                  >
                    <img
                      className="img"
                      src={produit.thumbnail}
                      alt="le produit"
                    />
                    <div className="img-info">
                      <div className="info-inner">
                        <span className="p-name">{produit.name}</span>
                        <span className="p-company">{produit.marque}</span>
                      </div>
                    </div>
                  </div>
                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner"></div>
                    </div>
                    <a
                      className="cart"
                      onClick={() => {
                        console.log("add -to-cart");
                      }}
                    >
                      <span className="price">{produit.price}€</span>
                      <span className="add-to-cart">
                        <span className="txt">Add in cart</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  width: 1400px;
  margin: 0 auto;
  display: flex;
`;

ShopPage.getInitialProps = async () => {
  const produits = await axios
    .get("http://127.0.0.1:8000/produit")
    .then((response) => {
      return response.data;
    });
  return { data: produits };
};

export default ShopPage;
