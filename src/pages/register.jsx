import React from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  collection,
  getAuth,
  doc,
  setDoc,
} from "../firebase-config";
import { useState } from "react";

function Register() {
  const [serviceEmail, setServiceEmail] = useState("");
  const [servicePassword, setServicePassword] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [servicePhone, setServicePhone] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");
  const [serviceFoundation, setServiceFoundation] = useState("");
  // const [serviceExperienceYears, setServiceExperienceYears] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  // const [serviceUserID, setServiceUserID] = useState("");
  // const [serviceCategoryID, setServiceCategoryID] = useState("");
  // const [categoryName, setCategoryName] = useState("");
  // const [categoryPhoto, setCategoryPhoto] = useState("");
  const [category, setCategory] = useState();
  // const [categories, setCategories] = useState([{}]);
  let categorias = [
    {
      id: "0UpyoJNa8pUJoOCSt2Si",
      name: "Canalização",
      photo: "https://cdn-icons-png.flaticon.com/512/2634/2634299.png",
    },
    {
      id: "KAGKm5sQkhcz1w4iqgxU",
      name: "Carpentaria",
      photo: "https://cdn-icons-png.flaticon.com/512/3531/3531573.png",
    },
    {
      id: "NDSexuXmbqGlOBSghLLS",
      name: "Mecânica",
      photo: "https://cdn-icons-png.flaticon.com/512/4635/4635207.png",
    },
    {
      id: "Yz0hnWT16Jq09ecLp3xK",
      name: "Tecnlogia",
      photo: "https://cdn-icons-png.flaticon.com/512/22/22819.png",
    },
    {
      id: "lglhGUaTeXODe5cTz9L3",
      name: "Cabeleireiro",
      photo: "https://cdn-icons-png.flaticon.com/512/3498/3498182.png",
    },
    {
      id: "sEbKG9btYdEuT2TNJKYm",
      name: "Cozinha",
      photo: "https://cdn-icons-png.flaticon.com/512/2253/2253374.png",
    },
    {
      id: "uZPIg2kL3QIU0obVjzV2",
      name: "Serralharia",
      photo: "https://cdn-icons-png.flaticon.com/512/1504/1504015.png",
    },
    {
      id: "xDj5DPLBk2HWPpjDQ2AJ",
      name: "Jardinagem",
      photo: "https://cdn-icons-png.flaticon.com/512/3350/3350366.png",
    },
    {
      id: "zD7V3nwtRTFHTf2PelOv",
      name: "Financas",
      photo: "https://cdn-icons-png.flaticon.com/512/1604/1604644.png",
    },
  ];

  const register = async (e) => {
    e.preventDefault();

    console.log(serviceEmail);
    console.log(servicePassword);
    createUserWithEmailAndPassword(auth, serviceEmail, servicePassword)
      .then((userCredential) => {
        localStorage.setItem("userID", userCredential.user.uid);
        // Signed in
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    const currentUser = getAuth();
    // console.log(currentUser);

    if (currentUser.currentUser !== "") {
      const company = {
        userID: localStorage.getItem("userSession"),
        name: serviceName,
        phone: servicePhone,
        location: serviceLocation,
        foundation: new Date(serviceFoundation).getFullYear(),
        experiencedYears: `${new Date().getFullYear() -
          new Date(serviceFoundation).getFullYear()} Anos`,
        description: serviceDescription,
        categoryId: category !== "" ? JSON.parse(category).id : "",
        category: category !== "" ? JSON.parse(category) : null,
      };

      const companyRef = doc(collection(db, "companies"));
      await setDoc(companyRef, company).then(() => {
        console.log(company);
        console.log("Document written with ID: ", company.id);
        window.location.href = "/profile";
      });
    }
  };

  return (
    <div className="uk-container uk-margin-large-top">
      <h3 className="uk-text-left uk-text-bolder uk-heading-bullet">
        {" "}
        Registo da Empresa
      </h3>
      <hr />
      <a href="/login" className="uk-button uk-button-text uk-text-capitalize">
        <span uk-icon="icon: arrow-left"></span>Voltar para iniciar a sessão{" "}
      </a>

      <p className="uk-text-left uk-text-light uk-margin-large-top">
        {" "}
        Regista te e conecte os seus serviços a centenas de clientes.
      </p>

      <form className="uk-grid-small uk-grid" method="POST" onSubmit={register}>
        <div className="uk-width-1-3@s">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Nome da empresa
          </label>

          <input
            className="uk-input"
            name="name"
            type="text"
            onChange={(event) => {
              setServiceName(event.target.value);
            }}
            placeholder="Vale"
          />
        </div>
        <div className="uk-width-1-3@s">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Data da fundação
          </label>
          <input
            className="uk-input"
            name="foundation"
            type="date"
            onChange={(event) => {
              setServiceFoundation(event.target.value);
            }}
            placeholder="01/01/2022"
          />
        </div>
        <div className="uk-width-1-3@s">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Contacto
          </label>
          <input
            className="uk-input"
            name="phone"
            type="text"
            onChange={(event) => {
              setServicePhone(event.target.value);
            }}
            placeholder="25884090000"
          />
        </div>
        <div className="uk-width-1-3@s uk-margin-top">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            {" "}
            Localizacao / Endereço
          </label>
          <input
            className="uk-input"
            name="location"
            type="text"
            onChange={(event) => {
              setServiceLocation(event.target.value);
            }}
            placeholder="Tete, Chingodzi"
          />
        </div>

        <div className="uk-width-1-3@s uk-margin-top">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Area de actuação
          </label>

          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            className="uk-select"
          >
            <option value="Tecnologia de Informação">
              Seleccione uma opção
            </option>

            {categorias.map(function(value, key) {
              return (
                <option
                  key={key}
                  index={value.id}
                  value={JSON.stringify(value)}
                >
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="uk-width-1-1@s uk-margin-top">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Descrição dos seus serviços
          </label>
          <textarea
            name="description"
            className="uk-textarea"
            type="text"
            onChange={(event) => {
              setServiceDescription(event.target.value);
            }}
            rows="3"
          ></textarea>
        </div>

        <div className="uk-width-1-3@s uk-margin-top">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Nome de acesso
          </label>
          <input
            className="uk-input"
            name="email"
            type="text"
            onChange={(event) => {
              setServiceEmail(event.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="uk-width-1-3@s uk-margin-top">
          <label className="uk-form-label" htmlFor="form-stacked-text">
            Senha
          </label>
          <input
            className="uk-input"
            name="password"
            type="text"
            onChange={(event) => {
              setServicePassword(event.target.value);
            }}
            placeholder=""
          />
        </div>

        <div className="uk-width-1-1@s">
          <p></p>
          <button
            type="submit"
            className="uk-button uk-button-secondary uk-border-rounded uk-align-right"
          >
            {" "}
            Registar
          </button>
        </div>
      </form>
    </div>
  );
}

export { Register };
