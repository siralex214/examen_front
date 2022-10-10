import Head from "@components/Head";
import Header from "@components/Layout/Header";
import ROUTES from "@constants/routes";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const AuthPage: NextPage = () => {
  const refEmail = React.useRef<HTMLSpanElement>(null);
  const refInputEmail = React.useRef<HTMLInputElement>(null);
  const refPassword = React.useRef<HTMLSpanElement>(null);
  const refInputPassword = React.useRef<HTMLInputElement>(null);
  const [valueForm, setValueForm] = React.useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  return (
    <>
      <Header title={"connexion"} description={"Veuillez vous connectez"} />
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (refInputEmail.current && refInputPassword.current) {
              setValueForm({
                email: refInputEmail.current.value,
                password: refInputPassword.current.value,
              });
              const formData = new FormData();
              formData.append("email", valueForm.email);
              formData.append("password", valueForm.password);

              axios
                .post("http://127.0.0.1:8000/login", formData)
                .then((res) => {
                  if (res.data.message === "User not found") {
                    if (refEmail.current) {
                      refEmail.current.style.borderColor = "red";
                      refEmail.current.style.visibility = "visible";
                      refEmail.current.style.opacity = "1";
                      refEmail.current.style.transform = "scale(1)";
                    }
                  } else if (res.data.message === "Invalid email") {
                    if (refEmail.current) {
                      refEmail.current.style.borderColor = "red";
                      refEmail.current.style.visibility = "visible";
                      refEmail.current.style.opacity = "1";
                      refEmail.current.style.transform = "scale(1)";
                    }
                  } else if (res.data.message === "Invalid password") {
                    if (refPassword.current) {
                      refPassword.current.style.borderColor = "red";
                      refPassword.current.style.visibility = "visible";
                      refPassword.current.style.opacity = "1";
                      refPassword.current.style.transform = "scale(1)";
                    }
                  } else if (res.data.message === "Logged in") {
                    router.push("/");
                  }
                });
            }
          }}
        >
          <Title>Connexion</Title>
          <BoxLabel>
            <Label>Email</Label>
          </BoxLabel>
          <BoxInput>
            <Input
              onInput={(e) => {
                setValueForm({ ...valueForm, email: e.currentTarget.value });
              }}
              ref={refInputEmail}
              onBlur={() => {
                if (refEmail.current) {
                  refEmail.current.removeAttribute("style");
                }
              }}
              onFocus={() => {
                if (refEmail.current) {
                  refEmail.current.style.visibility = "visible";
                  refEmail.current.style.opacity = "1";
                  refEmail.current.style.transform = "scale(1)";
                }
              }}
              type="email"
            />
            <StyledSpan ref={refEmail}></StyledSpan>
          </BoxInput>
          <BoxLabel>
            <Label>
              Mot de passe <a href="/mdp-oublier">mot de passe oublié?</a>
            </Label>
          </BoxLabel>
          <BoxInput>
            <Input
              onInput={(e) => {
                setValueForm({ ...valueForm, password: e.currentTarget.value });
              }}
              ref={refInputPassword}
              onBlur={() => {
                if (refPassword.current) {
                  refPassword.current.setAttribute("style", "");
                }
              }}
              onFocus={() => {
                if (refPassword.current) {
                  refPassword.current.style.visibility = "visible";
                  refPassword.current.style.opacity = "1";
                  refPassword.current.style.transform = "scale(1)";
                }
              }}
              type="password"
            />
            <StyledSpan ref={refPassword}></StyledSpan>
          </BoxInput>
          <StyledNoAccount>
            Pas encore de compte, <a href={ROUTES.REGISTER}>inscris toi!</a>
          </StyledNoAccount>
          <InputSubmit type="submit" value="envoyer" />
        </Form>
      </Container>
    </>
  );
};

export const InputSubmit = styled.input`
  transition: all 0.3s;
  cursor: pointer;
  color: white;
  margin-top: 30px;
  line-height: 1.2;
  font-size: 18px;
  display: block;
  width: 100%;
  background-color: #333;
  height: 60px;
  padding: 0 20px;
  outline: none;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #444;
  }
`;

export const Container = styled.div`
  min-height: 85vh;
  padding-top: 50px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 680px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  padding: 0 110px;
  padding-top: 62px;
  padding-bottom: 33px;
`;

export const Title = styled.h2`
  width: 100%;
  display: block;
  font-size: 39px;
  color: #555;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 53px;
`;

export const BoxLabel = styled.div`
  padding-bottom: 9px;
  padding-top: 31px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  font-weight: 600;
`;

export const BoxInput = styled.div`
  position: relative;
  width: 100%;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

export const Input = styled.input`
  font-family: Poppins-Regular;
  color: #333;
  line-height: 1.2;
  font-size: 18px;
  display: block;
  width: 100%;
  background: 0 0;
  height: 60px;
  padding: 0 20px;
  outline: none;
  border: none;
`;

export const StyledSpan = styled.span`
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid #fc00ff;
  border-radius: 10px;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-transform: scaleX(1.1) scaleY(1.3);
  -moz-transform: scaleX(1.1) scaleY(1.3);
  -ms-transform: scaleX(1.1) scaleY(1.3);
  -o-transform: scaleX(1.1) scaleY(1.3);
  transform: scaleX(1.1) scaleY(1.3);
`;

export const StyledNoAccount = styled.p`
  margin-bottom: 30px;
`;

export default AuthPage;
