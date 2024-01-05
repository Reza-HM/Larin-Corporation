import { FC } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Modules/Navbar";
import Footer from "./Components/Modules/Footer";

const App: FC = () => {
  const router = useRoutes(routes as RouteObject[]);
  return (
    <div className="">
      <Header />
      {router}
      <Footer />
    </div>
  );
};
export default App;
