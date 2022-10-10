import Header from "@components/Layout/Header";
import ROUTES from "@constants/routes";
import {
  BoxInput,
  BoxLabel,
  Container,
  Form,
  Input,
  InputSubmit,
  Label,
  StyledNoAccount,
  StyledSpan,
  Title,
} from "@screens/Auth";
import { validateMail } from "@utils/check";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const RegisterPage: NextPage = () => {
  const refEmail = React.useRef<HTMLSpanElement>(null);
  const refInputEmail = React.useRef<HTMLInputElement>(null);
  const refPassword = React.useRef<HTMLSpanElement>(null);
  const refInputPassword = React.useRef<HTMLInputElement>(null);
  const refPasswordConfirm = React.useRef<HTMLSpanElement>(null);
  const refInputPasswordConfirm = React.useRef<HTMLInputElement>(null);
  const refName = React.useRef<HTMLSpanElement>(null);
  const refInputName = React.useRef<HTMLInputElement>(null);
  const refFirstname = React.useRef<HTMLSpanElement>(null);
  const refInputFirstname = React.useRef<HTMLInputElement>(null);
  const refBirthday = React.useRef<HTMLSpanElement>(null);
  const refInputBirthday = React.useRef<HTMLInputElement>(null);

  const [valueForm, setValueForm] = React.useState({
    email: "",
    password: "",
    name: "",
    firstName: "",
    birthday: "",
  });

  const error: {
    email?: string;
    password?: string;
    name?: string;
    firstName?: string;
    birthday?: string;
  }[] = [];

  const router = useRouter();

  return (
    <>
      <Header title="créer votre compte" description="inscris toi" />
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (refInputEmail.current && refInputPassword.current) {
              setValueForm({
                ...valueForm,
                email: refInputEmail.current.value,
                password: refInputPassword.current.value,
              });
              const formData = new FormData();

              if (validateMail(valueForm.email)) {
                error.push({ email: "email invalide" });
              }

              if (valueForm.password.length < 8) {
                error.push({ password: "password trop court" });
              }

              if (
                valueForm.password !== refInputPasswordConfirm.current?.value
              ) {
                error.push({ password: "password différent" });
              }

              if (valueForm.name.length < 2) {
                error.push({ name: "nom trop court 2 caractères minimum" });
              }

              if (valueForm.firstName.length < 2) {
                error.push({
                  firstName: "prénom trop court 2 caractères minimum",
                });
              }

              if (error.length === 0) {
                formData.append("email", valueForm.email);
                formData.append("password", valueForm.password);
                formData.append("last_name", valueForm.name);
                formData.append("first_name", valueForm.firstName);
                formData.append("birthday", valueForm.birthday);

                axios
                  .post("http://127.0.0.1:8000/register", formData)
                  .then((res) => {
                    console.log(res.data);
                  });

                //   router.push(ROUTES.HOME);
              }
            }
          }}
        >
          <Title>Inscription</Title>
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
            <Label>Mot de passe</Label>
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
          <BoxLabel>
            <Label>Vérifier votre mot de passe</Label>
          </BoxLabel>
          <BoxInput>
            <Input
              onInput={(e) => {
                if (valueForm.password !== e.currentTarget.value) {
                  if (refPasswordConfirm.current) {
                    refPasswordConfirm.current.style.border = "1px solid red";
                  }
                } else if (valueForm.password === e.currentTarget.value) {
                  if (refPasswordConfirm.current) {
                    refPasswordConfirm.current.style.removeProperty("border");
                  }
                }
              }}
              ref={refInputPasswordConfirm}
              onBlur={() => {
                if (refPasswordConfirm.current) {
                  refPasswordConfirm.current.setAttribute("style", "");
                }
              }}
              onFocus={() => {
                if (refPasswordConfirm.current) {
                  refPasswordConfirm.current.style.visibility = "visible";
                  refPasswordConfirm.current.style.opacity = "1";
                  refPasswordConfirm.current.style.transform = "scale(1)";
                }
              }}
              type="password"
            />
            <StyledSpan ref={refPasswordConfirm}></StyledSpan>
          </BoxInput>
          <BoxLabel>
            <Label>Nom</Label>
          </BoxLabel>
          <BoxInput>
            <Input
              onInput={(e) => {
                setValueForm({ ...valueForm, name: e.currentTarget.value });
              }}
              ref={refInputName}
              onBlur={() => {
                if (refName.current) {
                  refName.current.setAttribute("style", "");
                }
              }}
              onFocus={() => {
                if (refName.current) {
                  refName.current.style.visibility = "visible";
                  refName.current.style.opacity = "1";
                  refName.current.style.transform = "scale(1)";
                }
              }}
              type="text"
            />
            <StyledSpan ref={refName}></StyledSpan>
          </BoxInput>
          <BoxLabel>
            <Label>Prénom</Label>
          </BoxLabel>
          <BoxInput>
            <Input
              onInput={(e) => {
                setValueForm({
                  ...valueForm,
                  firstName: e.currentTarget.value,
                });
              }}
              ref={refInputFirstname}
              onBlur={() => {
                if (refFirstname.current) {
                  refFirstname.current.setAttribute("style", "");
                }
              }}
              onFocus={() => {
                if (refFirstname.current) {
                  refFirstname.current.style.visibility = "visible";
                  refFirstname.current.style.opacity = "1";
                  refFirstname.current.style.transform = "scale(1)";
                }
              }}
              type="text"
            />
            <StyledSpan ref={refFirstname}></StyledSpan>
          </BoxInput>
          <BoxLabel>
            <Label>Date de naissance</Label>
          </BoxLabel>
          <BoxInput>
            <Input
              onInput={(e) => {
                setValueForm({ ...valueForm, birthday: e.currentTarget.value });
              }}
              ref={refInputBirthday}
              onBlur={() => {
                if (refBirthday.current) {
                  refBirthday.current.setAttribute("style", "");
                }
              }}
              onFocus={() => {
                if (refBirthday.current) {
                  refBirthday.current.style.visibility = "visible";
                  refBirthday.current.style.opacity = "1";
                  refBirthday.current.style.transform = "scale(1)";
                }
              }}
              type="date"
            />
            <StyledSpan ref={refBirthday}></StyledSpan>
          </BoxInput>
          <StyledNoAccount>
            Déja un compte, <a href={ROUTES.AUTH}>connecte toi!</a>
          </StyledNoAccount>
          <InputSubmit type="submit" value="envoyer" />
        </Form>
      </Container>
    </>
  );
};

export default RegisterPage;
