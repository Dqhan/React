import React from "react";
import ReactDOM from "react-dom";
import ContainerComponent from "./ContainerComponent";
import ShowComponent from "./ShowComponent";

{
  ReactDOM.render(
    <ContainerComponent>
      <ShowComponent />
    </ContainerComponent>,
    document.getElementById("app")
  );
}
