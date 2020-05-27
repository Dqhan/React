import ContainerComponent from "./ContainerComponent";
import ShowComponent from "./ShowComponent";
import HookDemo from "./HookDemo";

{
  ReactDOM.render(
    // <ContainerComponent
    //   render={({ count, handlePlus }) => (
    //     <ShowComponent count={count} handlePlus={handlePlus} />
    //   )}
    // />,
    <HookDemo />,
    document.getElementById("app")
  );
}
