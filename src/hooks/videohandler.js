import { useState, useEffect } from "react";

function useVideoHandler({ cloudinaryUrl, imagekitUrl }) {
  const [videoSrc, setVideoSrc] = useState(cloudinaryUrl);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset error state when cloudinaryUrl changes
    setError(false);
    setVideoSrc(cloudinaryUrl);

    // Create a video element to test if the video loads
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = cloudinaryUrl;

    video.onloadedmetadata = () => {
      setVideoSrc(cloudinaryUrl);
      setError(false);
    };

    video.onerror = () => {
      setError(true);
    };

    // Cleanup
    return () => {
      video.onloadedmetadata = null;
      video.onerror = null;
      video.src = '';
    };
  }, [cloudinaryUrl]);

  useEffect(() => {
    if (error && imagekitUrl) {
      setVideoSrc(imagekitUrl);
    }
  }, [error, imagekitUrl]);

  return videoSrc;
}

export default useVideoHandler;