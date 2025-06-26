import React from 'react';
import '../styles/Explore.scss';

const mockReels = [
  {
    id: 1,
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    type: 'video',
    src: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 7,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 9,
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.webm',
  },
  {
    id: 10,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 11,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 12,
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/tunnel.webm',
  },
  {
    id: 13,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 14,
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/forest.webm',
  },
  {
    id: 15,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 16,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 17,
    type: 'video',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 18,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 19,
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
  },
  {
    id: 20,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60',
  },
];

// Shuffle array function
function shuffleArray(arr) {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Explore = () => {
  // Shuffle reels to randomize order each render
  const reels = shuffleArray(mockReels);

  return (
    <div className="explore-container">
      {reels.map((reel) => (
        <div key={reel.id} className="reel-item">
          {reel.type === 'video' ? (
            <video
              src={reel.src}
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : (
            <img src={reel.src} alt={`Reel ${reel.id}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Explore;
