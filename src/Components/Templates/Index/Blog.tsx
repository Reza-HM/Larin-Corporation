import BlogBox from "../../Modules/BlogBox";

const Blog = () => {
  return (
    <div className="mt-20 bg-gradient-to-t from-orange-100">
      <div className="container grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </div>
    </div>
  );
};
export default Blog;
