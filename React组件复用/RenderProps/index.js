import React from "react";
import ReactDOM from "react-dom";
import ContainerComponent from "./ContainerComponent";
import ShowComponent from "./ShowComponent";

{
  ReactDOM.render(
    <ContainerComponent
      render={({ count, handlePlus }) => (
        <ShowComponent count={count} handlePlus={handlePlus} />
      )}
      renderMsg={() => <div>我是msg</div>}
      renderColor={() => <div>我是color</div>}
    />,
    document.getElementById("app")
  );
}
