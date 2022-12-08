import React from "react";
import { useState } from "react";
import { Spinner } from "./spinner";
import { auth, signInWithEmailAndPassword } from "../firebase-config";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const currentUser = getAuth();
  // console.log(currentUser);

  const login = async (e) => {
    Spinner(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        localStorage.setItem("userSession", userEmail);
        Spinner(false);

        window.location.href = "/profile";
      })
      .catch((error) => {
        Spinner(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage, errorCode);
      });
  };

  return (
    <div className="uk-container uk-margin-large-top uk-margin-large-left">
      <h3 className="uk-text-left uk-text-bolder uk-heading-bullet uk-margin-large-top uk-margin-large-left">
        LogIn
      </h3>
      <hr />

      <p className="uk-text-left uk-text-light uk-margin-large-left">
        Aceda e controle a sua abragencia
      </p>

      <form
        method="POST"
        onSubmit={login}
        className="uk-grid uk-grid-small uk-width-1-2@s uk-margin-large-left"
      >
        <div className="uk-width-1-1@s">
          <label
            className="uk-form-label uk-align-left uk-margin-remove-bottom"
            htmlFor="form-stacked-text"
          >
            Usuário
          </label>
          <input
            className="uk-input"
            type="text"
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="uk-width-1-1@s">
          <label
            className="uk-form-label uk-align-left uk-margin-top uk-margin-remove-bottom"
            htmlFor="form-stacked-text"
          >
            Senha
          </label>
          <input
            className="uk-input"
            type="text"
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
            placeholder="Senha"
          />
        </div>

        <div className="uk-width-1-1@s">
          <p></p>
          <a
            href="/register"
            className="uk-button uk-button-text uk-text-lowercase uk-align-left"
          >
            A minha empresa não possui uma conta
            <span uk-icon="icon: arrow-right"></span>
          </a>

          <button
            type="submit"
            className="uk-button uk-button-secondary uk-border-rounded uk-align-right"
          >
            {"Aceder"}
          </button>
        </div>
      </form>
    </div>
  );
}

export { Login };
