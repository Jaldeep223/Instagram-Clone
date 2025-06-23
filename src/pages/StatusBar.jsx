

import React, { useRef } from 'react';
import stories from '../data/stories';
import '../styles/StatusBar.scss';

const StatusBar = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;

      if (direction === 'left') {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="status-bar-wrapper">
      <button className="scroll-btn left" onClick={() => scroll('left')}>
        &#8249;
      </button>

      <div className="status-bar" ref={scrollRef}>
        {stories.map((story) => (
          <div key={story.id} className="status">
            <img src={story.avatar} alt={story.username} />
            <p>{story.username}</p>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll('right')}>
        &#8250;
      </button>
    </div>
  );
};

export default StatusBar;




