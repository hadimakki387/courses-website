import React, { useState, useEffect } from "react";

function SectionsDB() {
  const [sections, setsections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("http://localhost:3000/api/sections");
        const data = await res.json();
        setsections(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return loading ? "isLoading" : sections;
}

export default SectionsDB;
