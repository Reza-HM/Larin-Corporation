import { FC } from "react";
import { RouteObject, useLocation, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Modules/Navbar";
import Footer from "./Components/Modules/Footer";

const App: FC = () => {
  const router = useRoutes(routes as RouteObject[]);
  const location = useLocation();
  return (
    <div className="">
      {!location.pathname.includes("signin") &&
        !location.pathname.includes("signup") && <Header />}
      {router}
      {!location.pathname.includes("signin") &&
        !location.pathname.includes("signup") && <Footer />}
    </div>
  );
};
export default App;
