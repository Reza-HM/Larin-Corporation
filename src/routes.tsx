import Aboutus from "./Pages/Aboutus";
import ArticleDetails from "./Pages/ArticleDetails";
import Blog from "./Pages/Blog";
import Contactus from "./Pages/Contactus";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import ProjectDetails from "./Pages/ProjectDetails";
import Projects from "./Pages/Projects";
import Questions from "./Pages/Questions";
import Register from "./Pages/Register";
import Search from "./Pages/Search";
import Services from "./Pages/Services";

interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/project-details/:projectName", element: <ProjectDetails /> },
  { path: "/questions", element: <Questions /> },
  { path: "/blog", element: <Blog /> },
  { path: "/article-details/:articleName", element: <ArticleDetails /> },
  { path: "/aboutus", element: <Aboutus /> },
  { path: "/contactus", element: <Contactus /> },
  { path: "/signin", element: <Login /> },
  { path: "/signup", element: <Register /> },
  { path: "/search/:value", element: <Search /> },
];

export default routes;
