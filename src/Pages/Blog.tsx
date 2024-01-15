import { useDispatch, useSelector } from "react-redux";
import BlogBox from "../Components/Modules/BlogBox";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect } from "react";
import { getArticlesFromServer } from "../Redux/store/articles";

const Blog = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getArticlesFromServer("https://larin-corporation.vercel.app/api/blog"));
  }, [dispatch]);

  return (
    <div className="container">
      <BreadCrumb route="وبلاگ" />
      <SectionHeader englishTitle="Blog" persianTitle="وبلاگ" />
      <div className="my-32 grid grid-cols-12 gap-8">
        {articles.map((article) => (
          <BlogBox {...article} key={article.id} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
