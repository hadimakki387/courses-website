import React from 'react'
import VideoCard from './VideoCard';

function Section({ section, Videos, editMode, handleDoubleClick, handleChange, handleUpdate }:any) {
    return (
      <div key={section.section_id}>
        <div className="mb-1">{section.name}</div>
        <div className="flex flex-col gap-2">
          {Videos.map((video:any, index:any) => {
            if (section.section_id === video.section_id) {
              return (
                <VideoCard
                  key={index}
                  video={video}
                  index={index}
                  editMode={editMode[index]}
                  handleDoubleClick={handleDoubleClick}
                  handleChange={handleChange}
                  handleUpdate={handleUpdate}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }

export default Section