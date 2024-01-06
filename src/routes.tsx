import Index from "./Pages/Index";
import Services from "./Pages/Services";

interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <Services /> },
];

export default routes;
