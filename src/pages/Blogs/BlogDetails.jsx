
import { useLocation } from "react-router-dom";

export default function BlogDetails() {
  const location = useLocation();
  // const navigate = useNavigate();
  const blog = location.state?.blog;
  return (
    <div className="max-w-3xl mx-auto py-10">
      <img
        src={blog.header_img}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.upload_date}</p>
      <div className="text-lg leading-relaxed">{blog.content}</div>
    </div>
  );
}
