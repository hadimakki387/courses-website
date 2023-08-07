import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React , {useEffect}from 'react'

function VideoCard({
    video,
    index,
    editMode,
    handleDoubleClick,
    handleChange,
    handleUpdate,
  }:any) {

    useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          handleUpdate(index);
        }
      };
      
      if (editMode) {
        document.addEventListener('keypress', handleKeyPress);
      }
      return () => {
        document.removeEventListener('keypress', handleKeyPress);
      };
    }, [editMode, handleUpdate, index]);

    return (
      <div key={index} className="bg-gray-600 p-4 rounded-md">
        <div onDoubleClick={() => handleDoubleClick(index)}>
          {editMode ? (
            <div className="flex items-center gap-4 max-[860px]:flex-col max-[860px]:items-start">
              <input
                defaultValue={video.title}
                className="bg-gray-700 p-2 rounded-md w-[50%] max-[860px]:w-full"
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
              <input
                defaultValue={video.duration.mins}
                className="bg-gray-700 p-2 rounded-md w-[10%] max-[860px]:w-full"
                onChange={(e) => handleChange(index, "mins", e.target.value)}
              />
              <input
                defaultValue={video.duration.secs}
                className="bg-gray-700 p-2 rounded-md w-[10%] max-[860px]:w-full"
                onChange={(e) => handleChange(index, "secs", e.target.value)}
              />
              <input
                defaultValue={video.url}
                className="bg-gray-700 p-2 rounded-md w-[20%] max-[860px]:w-full"
                onChange={(e) => handleChange(index, "url", e.target.value)}
              />
              <FontAwesomeIcon icon={faCheck} onClick={() => handleUpdate(index)} />
            </div>
          ) : (
            <div className="flex gap-4 items-center max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-2">
              <div className="w-[70%] ">{video.title}</div>
              <div className="w-[15%] ">
                {video.duration.mins}s {video.duration.secs}m
              </div>
              <div className="w-[15%] ">{video.url}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
export default VideoCard