import { useEffect } from "react";
import { getArticlesFromServer } from "../../../Redux/store/articles";
import BlogBox from "../../Modules/BlogBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";

const Blog = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getArticlesFromServer("http://localhost:3000/blog"));
  }, [dispatch]);

  return (
    <div className="mt-20 bg-gradient-to-t from-orange-100">
      <div className="container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
        {articles.slice(0, 4).map((article) => (
          <BlogBox {...article} key={article.id} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
