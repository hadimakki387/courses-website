import React from 'react'

function Video() {
  const videoUrl = "https://drive.google.com/file/d/1_cLzTQfFngtnMiqDs72NVhOtOZnLczoV/preview";
  
  return (

      <iframe
        src={videoUrl}
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    
  )
}

export default Video