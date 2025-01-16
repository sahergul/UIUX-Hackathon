import React, { useState } from "react";
import Image from "next/image";

interface comment {
  name: string;
  email: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<comment[]>([]); // Initialize as an empty array
  const [newComment, setNewComment] = useState({ name: "", email: "", text: "" });

  const handleAddComment = () => {
    if (newComment.name.trim() && newComment.text.trim()) {
      setComments([...comments, newComment]); // Add the new comment to the array
      setNewComment({ name: "", email: "", text: "" }); // Reset input fields
    }
  };

  return (
    <div className="mt-10">
        <div className="space-y-6">
              <Image src="/comment1.png" alt="Comment 1" width={872} height={112} className="w-full h-auto" />
              <Image src="/comment2.png" alt="Comment 2" width={672} height={112} className="w-full lg:w-3/4 h-auto ml-auto" />
              <Image src="/comment3.png" alt="Comment 3" width={872} height={112} className="w-full h-auto" />
            </div>
      {/* Display Comments */}
      <div>
        <h3 className="font-bold text-lg mb-4">({comments.length})</h3>
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-100 text-gray-800">
                <h4 className="font-semibold">{comment.name}</h4>
                <p>{comment.text}</p>
                {comment.email && <p className="text-gray-600">Email: {comment.email}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
      
      {/* Add Comment */}
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-2">Post a Comment</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={newComment.email}
            onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Write a comment..."
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            onClick={handleAddComment}
            className="px-4 py-2 mb-2 bg-yellow-500 text-white rounded-lg"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
