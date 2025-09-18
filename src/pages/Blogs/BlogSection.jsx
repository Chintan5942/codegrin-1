import { BLOGS } from "../../constants/BlogConstant";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/RoutesContants";

export default function BlogSection({ bloglimit = 4 }) {
      const navigate = useNavigate();
      const handleRedirect = (blog) => {
        navigate(ROUTES.BLOG_DETAILS, { state: { blog } });
      };
      
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {BLOGS.slice(0, bloglimit).map((blog, index) => (
          <div
            key={index}
            className="w-full h-full cursor-pointer bg-primary-card p-3 rounded-xl border border-transparent hover:border-primary transition-all duration-500 ease-in-out"
            onClick={() => handleRedirect(blog)}
          >
            <img
              src={blog.header_img}
              alt={blog.title}
              className="w-full h-70 object-cover rounded-xl"
            />
            <div className="w-full flex-1 mt-3 flex flex-col justify-between min-h-20 xl:min-h-25">
              <h3 className="text-xl font-semibold line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm">{blog.upload_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
