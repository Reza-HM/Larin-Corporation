import Index from "./Pages/Index";

interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [{ path: "/", element: <Index /> }];

export default routes;
