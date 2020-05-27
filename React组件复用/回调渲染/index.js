import React from "react";
import ReactDOM from "react-dom";
import ContainerComponent from "./ContainerComponent";
import ShowComponent from "./ShowComponent";

{
  ReactDOM.render(
    <ContainerComponent>
      {({ count, handlePlus }) => (
        <ShowComponent count={count} handlePlus={handlePlus} />
      )}
    </ContainerComponent>,
    document.getElementById("app")
  );
}
