import axios from "axios";
import Link from "next/link";
import DeleteBlogBtn from "../../../components/DeleteBlogBtn";

async function getBlog(id) {
  try {
    const response = await axios.get(`${process.env.domain}/api/blogs/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default async function page({ params }) {
  const blog = await getBlog(params.blogid);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{blog?.title}</h1>
        <div className="flex gap-5">
          <button className="btn-outlined">
            <Link href="/">Back</Link>
          </button>
          <DeleteBlogBtn blogid={params.blogid} />
          <button className="btn-contained">
            <Link
              href={`
              /edit-blog/${params.blogid}
            `}
            >
              Edit
            </Link>
          </button>
        </div>
      </div>

      <img src={blog?.image} alt="" className="object-cover rounded" />
      <p>{blog?.description}</p>
    </div>
  );
}
