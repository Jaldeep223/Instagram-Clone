// import React, { useState } from 'react';
// import '../styles/Notifications.scss';

// const mockNotifications = [
//   { id: 1, user: 'john_doe', text: 'liked your photo', time: '2m ago' },
//   { id: 2, user: 'alice_wonder', text: 'started following you', time: '10m ago' },
//   { id: 3, user: 'mark_twain', text: 'commented: "Nice shot!"', time: '30m ago' },
//   { id: 4, user: 'emma_stone', text: 'mentioned you in a comment', time: '1h ago' },
//   { id: 5, user: 'samuel_green', text: 'sent you a message', time: '2h ago' },
//   { id: 6, user: 'olivia_brown', text: 'liked your story', time: '3h ago' },
//   { id: 7, user: 'josh_black', text: 'shared your post', time: '5h ago' },
//   { id: 8, user: 'mia_white', text: 'tagged you in a photo', time: '1d ago' },
//   { id: 9, user: 'liam_gray', text: 'replied to your comment', time: '2d ago' },
//   { id: 10, user: 'jane_smith', text: 'liked your comment', time: '3d ago' },
// ];

// const NotificationPage = () => {
//   const [notifications] = useState(mockNotifications);

//   return (
//     <div className="notifications-container">
//       <h2>Notifications</h2>
//       {notifications.length === 0 ? (
//         <p>No notifications yet.</p>
//       ) : (
//         <ul>
//           {notifications.map(({ id, user, text, time }) => (
//             <li key={id} className="notification-item">
//               <strong>{user}</strong> {text} <span className="time">{time}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NotificationPage;



import React, { useState } from 'react';
import '../styles/Notifications.scss'; // Make sure this file exists

const notifications = [
  { id: 1, user: 'john_doe', text: 'liked your photo', time: '2m ago', details: 'John liked your sunset photo from yesterday.' },
  { id: 2, user: 'alice_wonder', text: 'started following you', time: '10m ago', details: 'Alice is now following your account.' },
  { id: 3, user: 'mark_twain', text: 'commented: "Nice shot!"', time: '30m ago', details: 'Mark commented on your mountain view picture.' },
  { id: 4, user: 'emma_stone', text: 'mentioned you in a comment', time: '1h ago', details: 'Emma mentioned you on her post.' },
  { id: 5, user: 'samuel_green', text: 'sent you a message', time: '2h ago', details: 'Check your inbox for a new message from Samuel.' },
];

const Notifications = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id); // toggle selection
  };

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul>
          {notifications.map(({ id, user, text, time, details }) => (
            <li
              key={id}
              className={`notification-item ${selectedId === id ? 'active' : ''}`}
              onClick={() => handleClick(id)}
            >
              <div className="notification-summary">
                <span>
                  <strong>{user}</strong> {text}
                </span>
                <span className="time">{time}</span>
              </div>
              {selectedId === id && (
                <div className="notification-details">{details}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;





