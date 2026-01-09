import { useState, useEffect } from "react";

function useVideoHandler({ cloudinaryUrl, imagekitUrl }) {
  const [videoSrc, setVideoSrc] = useState(cloudinaryUrl);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setVideoSrc(cloudinaryUrl);

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