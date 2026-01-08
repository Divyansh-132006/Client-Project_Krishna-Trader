import { useState, useEffect } from "react";

function useVideoHandler(cloudinaryUrl, imagekitUrl) {
  const [videoSrc, setVideoSrc] = useState(cloudinaryUrl);  
  const [error, setError] = useState(false);  
  
  useEffect(() => {
    // Test if the video URL is accessible
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    video.onloadedmetadata = () => {
      setVideoSrc(cloudinaryUrl);
      setError(false);  
    };

    video.onerror = () => {
      setError(true);  
    };
    
    video.src = cloudinaryUrl;
  }, [cloudinaryUrl]); 

  useEffect(() => {
    if (error && imagekitUrl) {
      setVideoSrc(imagekitUrl);  
    }
  }, [error, imagekitUrl]);

  return videoSrc; 
}

export default useVideoHandler;