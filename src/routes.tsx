import Aboutus from "./Pages/Aboutus";
import Blog from "./Pages/Blog";
import Contactus from "./Pages/Contactus";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Projects from "./Pages/Projects";
import Questions from "./Pages/Questions";
import Register from "./Pages/Register";
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
  { path: "/blog", element: <Blog /> },
  { path: "/aboutus", element: <Aboutus /> },
  { path: "/contactus", element: <Contactus /> },
  { path: "/signin", element: <Login /> },
  { path: "/signup", element: <Register /> },
];

export default routes;
