import Header from "@components/Layout/Header";
import { NextPage } from "next";
import React, { useEffect } from "react";
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

  return (
    <>
      <Header />
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (refInputEmail.current && refInputPassword.current) {
              console.log(valueForm);
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
            <Style ref={refEmail}></Style>
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
            <Style ref={refPassword}></Style>
          </BoxInput>
          <input type="submit" value="envoyer" />
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 85vh;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 680px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  padding: 0 110px;
  padding-top: 62px;
  padding-bottom: 33px;
`;

const Title = styled.h2`
  width: 100%;
  display: block;
  font-size: 39px;
  color: #555;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 53px;
`;

const BoxLabel = styled.div`
  padding-bottom: 9px;
  padding-top: 31px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  font-weight: 600;
`;

const BoxInput = styled.div`
  position: relative;
  width: 100%;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
`;

const Input = styled.input`
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

const Style = styled.span`
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

export default AuthPage;
