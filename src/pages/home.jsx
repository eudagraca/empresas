import React from "react";

function Home() {

  function goTo() {
    window.location.href = "/login";
  }
  return (
    <div className="uk-container uk-margin-top uk-margin-large-left">
      <h3 className="uk-text-left uk-text-bolder uk-heading-bullet uk-margin-large-top uk-margin-large-left">
        Service Connect
      </h3>
      {/* <hr /> */}

      <p className="uk-text-left uk-text-light uk-margin-large-left">
        Conectando empresas a seus potenciais cliente. Expanda o seu negócio e
        alcance a pico do seu negócio
      </p>

      <img
        className="uk-align-center"
        width="300px"
        alt=""
        src="https://cdn-icons-png.flaticon.com/512/4776/4776189.png"
      ></img>
      <button onClick={goTo} className="uk-border-rounded uk-align-center uk-button uk-button-secondary">Seguir</button>
    </div>
  );
}

export { Home };
