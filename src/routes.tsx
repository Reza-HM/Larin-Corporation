import Index from "./Pages/Index";
import Projects from "./Pages/Projects";
import Questions from "./Pages/Questions";
import Services from "./Pages/Services";

interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/questions", element: <Questions /> },
];

export default routes;
