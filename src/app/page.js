export const revalidate = 0;
import axios from "axios";
import Link from "next/link";

async function getBlogs() {
  try {
    const response = await axios.get(`${process.env.domain}/api/blogs`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">All Blogs</h1>
        <button className="btn-contained">
          <Link href="/add-blog">Add Blog</Link>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog._id}`} key={blog._id}>
            <div className="cursor-pointer border p-5 rounded border-gray-300">
              <img
                src={blog.image}
                alt=""
                className="h-52 w-full object-cover rounded"
              />
              <h1 className="text-gray-700 mt-2">{blog.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
