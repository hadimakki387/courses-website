import React from 'react'
import VideoCard from './VideoCard';

function Section({ section, Videos, editMode, handleDoubleClick, handleChange, handleUpdate ,setNum}:any) {
    return (
      <div key={section.id}>
        <div className="mb-1">{section.title}</div>
        <div className="flex flex-col gap-2">
          {Videos.map((video:any, index:any) => {
            if (section.id === video.sectionID) {
              return (
                <VideoCard
                  key={index}
                  video={video}
                  index={index}
                  editMode={editMode[index]}
                  handleDoubleClick={handleDoubleClick}
                  handleChange={handleChange}
                  handleUpdate={handleUpdate}
                  setNum={setNum}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }

export default Section