
import React , {useState , useEffect} from 'react'

function VideosDB() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("http://localhost:3000/api/Alvideos");
        const data = await res.json();
        setVideos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return loading ? "isLoading" : videos;
}

export default VideosDB