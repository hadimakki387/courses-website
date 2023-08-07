import React, { useState, useEffect } from "react";

function GetVideos(route) {
  const [sections, setsections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(`http://localhost:3000/api/${route}`);
        const data = await res.json();
        setsections(data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching videos:${route}`, error);
      }
    }

    fetchVideos();
  }, []);

  return loading ? "isLoading" : sections;
}

export default GetVideos;
