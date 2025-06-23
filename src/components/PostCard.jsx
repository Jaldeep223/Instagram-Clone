import React, { useState } from 'react';
import '../styles/PostCard.scss';


const PostCard = ({ post }) => {
  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  if (!post) return <div>Loading post...</div>;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, { user: 'You', text: newComment }];
      setComments(updatedComments);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={post.userAvatar}
          alt={`${post.username} avatar`}
          className="avatar"
        />
        <strong>{post.username}</strong>
      </div>

      <img src={post.image} alt="Post content" className="post-image" />

      <div className="post-info">
        <div className="likes-comments">
          <div className="likes" onClick={handleLike}>
            ❤️ <strong>{likes}</strong>
          </div>
          <div
            className="comments-count"
            onClick={() => setShowInput(!showInput)}
          >
            💬 <strong>{comments.length}</strong>
          </div>
        </div>

        <p className="caption">{post.caption}</p>

        <div className="comments">

          {comments.map((comment, idx) => (
            <div key={idx} className="comment-item">
              <p>
                <strong>{comment.user}:</strong> {comment.text}
              </p>
              <button
                className="delete-comment-btn"
                onClick={() => handleDeleteComment(idx)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>

        {showInput && (
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Post</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostCard;
