import  { React,useEffect }from 'react';
import PostCard from '../components/PostCard';
import '../styles/Home.scss';


const mockPosts = [
  {
    id: 1,
    username: 'john_doe',
    userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    likes: 34,
    caption: 'Loving the vibes!',
    comments: [
      { user: 'jane', text: 'Amazing!' },
    ],
  },
  {
    id: 2,
    username: 'jane_smith',
    userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    likes: 21,
    caption: 'Chilling in the city',
    comments: [{ user: 'john_doe', text: 'So beautiful!' }],
  },
  {
    id: 3,
    username: 'alice_wonder',
    userAvatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
    likes: 50,
    caption: 'Adventure time!',
    comments: [],
  },
  {
    id: 4,
    username: 'mark_twain',
    userAvatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    likes: 15,
    caption: 'Coffee and books',
    comments: [{ user: 'alice_wonder', text: 'Love this!' }

    ],
  },
  {
    id: 5,
    username: 'emma_stone',
    userAvatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
    likes: 40,
    caption: 'Sunset at the beach',
    comments: [
      { user: 'mark_twain', text: 'Cool!' },
      { user: 'jane_smith', text: 'Nice view!' },
    ],
  }, {
    id: 6,
    username: 'samuel_green',
    userAvatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    image: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40',
    likes: 22,
    caption: 'Hiking the hills',
    comments: [
      { user: 'emma_stone', text: 'Looks fun!' },
      { user: 'alice_wonder', text: 'Wish I was there!' },
    ],
  },
  {
    id: 7,
    username: 'olivia_brown',
    userAvatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
    likes: 28,
    caption: 'Morning coffee vibes',
    comments: [{ user: 'samuel_green', text: 'Nice mug!' }],
  },
  {
    id: 8,
    username: 'josh_black',
    userAvatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    likes: 19,
    caption: 'City lights at night',
    comments: [],
  },
  {
    id: 9,
    username: 'mia_white',
    userAvatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d',
    likes: 45,
    caption: 'Art in the streets',
    comments: [
      { user: 'josh_black', text: 'Love street art!' },
      { user: 'mark_twain', text: 'Very creative!' },
    ],
  },
  {
    id: 10,
    username: 'liam_gray',
    userAvatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    likes: 38,
    caption: 'Mountain top view',
    comments: [],
  },
];




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      {mockPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;

