import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // outline heart
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // solid heart
import '../styles/PostCard.scss';

const PostCard = ({ post }) => {
  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { user: 'You', text: newComment }]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const handleLikeToggle = () => {
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={post.userAvatar} alt={`${post.username} avatar`} className="avatar" />
        <strong>{post.username}</strong>
      </div>

      <img src={post.image} alt="Post content" className="post-image" />

      <div className="post-info">
        <div className="likes-comments">
          <div className="likes" onClick={handleLikeToggle}>
            <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} className={`heart-icon ${liked ? 'liked' : ''}`} />
            <strong>{likes}</strong>
          </div>
          <div className="comments-count">
            💬 <strong>{comments.length}</strong>
          </div>
        </div>

        <p className="caption">{post.caption}</p>

        <div className="comments-section">
          {comments.map((comment, idx) => (
            <div key={idx} className="comment-item">
              <p>
                <strong>{comment.user}:</strong> {comment.text}
              </p>
              <button className="delete-comment-btn" onClick={() => handleDeleteComment(idx)} aria-label="Delete comment">❌</button>
            </div>
          ))}

          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              autoFocus
            />
            <button type="submit" disabled={!newComment.trim()}>Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

