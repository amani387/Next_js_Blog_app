"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

function DeleteBlogBtn({ blogid }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onDelete = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/api/blogs/${blogid}`);
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <button className="btn-outlined" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteBlogBtn;
