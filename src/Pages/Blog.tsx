import BlogBox from "../Components/Modules/BlogBox";
import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";

const Blog = () => {
  return (
    <div className="container">
      <BreadCrumb route="وبلاگ" />
      <SectionHeader englishTitle="Blog" persianTitle="وبلاگ" />
      <div className="my-32 grid grid-cols-12 gap-8">
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </div>
    </div>
  );
};
export default Blog;
