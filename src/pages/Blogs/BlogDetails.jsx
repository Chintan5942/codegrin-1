
import { useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

export default function BlogDetails() {
  const location = useLocation();
  // const navigate = useNavigate();
  const blog = location.state?.blog;
  return (
    <div className="container">
      <PageTitle title={blog.title} showBreadcrumb={false} />
      <img src={blog.blog_image} alt="" className="w-full h-full object-cover rounded-xl my-10"/>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.blog_content }}
      />
      <div className="flex justify-between items-center border-t border-primary mt-10 pt-5">
        <p className="text-gray-500">{blog.upload_date}</p>
        <p className="text-gray-500">- {blog.publisher_name}</p>
      </div>
      
    </div>
  );
}
