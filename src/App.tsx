import { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Modules/Header";

const App: FC = () => {
  const router = useRoutes(routes as RouteObject[]);
  return (
    <div className="">
      <Header />
      {router}
    </div>
  );
};
export default App;
