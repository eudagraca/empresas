import React from "react";

function Spinner(isLoad) {
  return (
    // <di className="uk-position-center">
    <span
      hidden={isLoad}
      className="uk-position-center"
      uk-spinner="ratio: 4.5"
    ></span>
    // </di>
  );
}

export { Spinner };
