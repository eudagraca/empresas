import React from "react";
import { useState } from "react";
import {
  auth,
  db,
  collection,
  getAuth,
  query,
  where,
  signOut,
  getDocs,
} from "../firebase-config";

function Profile() {
  const [userEmail, setUserEmail] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceFoundation, setServiceFoundation] = useState("");
  const [category, setCategory] = useState({});
  const [experiencedYears, setExperiencedYears] = useState("");
  const [location, setLocation] = useState("");
  const [uid, setUID] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

  const user = async () => {
    const currentUser = auth;
    currentUser.onAuthStateChanged((e) => {
      if (e) {
        setUserEmail(e.email);
        setUID(e.uid);
      }
    });

    // console.log(uid)

    const table = query(
      collection(db, "companies"),
      where("userID", "==", uid)
    );
    await getDocs(table)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc);

          // doc.data() is never undefined for query doc snapshots
          setServiceFoundation(doc.get("foundation"));
          setServiceName(doc.get("name"));
          setDescription(doc.get("description"));
          setLocation(doc.get("location"));
          setPhone(doc.get("phone"));
          setExperiencedYears(doc.get("experiencedYears"));
          setCategory(doc.get("category"));
          // console.log(doc.get("name"));
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  user();

  const logOut = async (e) => {
    // e.preventDefault();
    const auth = getAuth();
    console.log(auth);
    signOut(auth)
      .then(() => {
        localStorage.clear();
        window.location.href = "/login";
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  if (serviceName) {
    return (
      <div className="uk-container uk-margin-large-top">
        <h3 className="uk-text-left uk-text-bolder uk-heading-bullet">
          O PERFIL DA EMPRESA <span uk-icon="icon: gitter; ratio: 1.5"></span>
        </h3>
        <hr />
        <div className="uk-grid uk-child-width-1-1@s uk-child-width-1-2@s">
          <div>
            <p className="uk-text-bolder uk-h3">{serviceName}</p>
            <p className="uk-text-light">
              Ano da fundação: <br />
              <span className="uk-text-small">{serviceFoundation}</span>
            </p>
            <p className="uk-text-light">
              Localização: <br />
              <span className="uk-text-small">{location}</span>
            </p>
            <p className="uk-text-light">
              Contacto tel: <br />
              <span className="uk-text-small">{phone}</span>
            </p>
            <p className="uk-text-light">
              Email :<br />
              <span className="uk-text-small"> {userEmail}</span>
            </p>
          </div>

          <div className="uk-margin-remove">
            <p className="uk-text-bold uk-h5">Serviços</p>
            <p className="uk-text-light">
              Area de actuação: <br />
              <span className="uk-text-small">{category.name}</span>
            </p>
            <p className="uk-text-light">
              Descrição dos serviços: <br />
              <span className="uk-text-small">{description}</span>
            </p>
            <p className="uk-text-light">
              Anos de experiência no mercado: <br />
              <span className="uk-text-small"> {experiencedYears} </span>
            </p>
            <p className="uk-text-light">
              Classificacao dos clientes :<br />
              <span className="uk-text-small">
                {" "}
                <span uk-icon="star"></span> <span uk-icon="star"></span>
                <span uk-icon="star"></span>
                <span uk-icon="star"></span>
              </span>
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={logOut}
          className="uk-button uk-button-danger uk-border-rounded uk-margin-top"
        >
          Desconectar <span uk-icon="sign-out"></span>
        </button>
      </div>
    );
  } else {
    return (
      // <di className="uk-position-center">
      <span className="uk-position-center" uk-spinner="ratio: 4.5"></span>
      // </di>
    );
  }
}

export { Profile };
