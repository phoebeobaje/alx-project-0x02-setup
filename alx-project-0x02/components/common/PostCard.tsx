import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps>=({ title, content,userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="text-sm text-gray-500">
      <p className="text-sm text-gray-500 mt-4">Posted by User #{userId}</p>
      </div>
    </div>
  );    

}
export default PostCard;