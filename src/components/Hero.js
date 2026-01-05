import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import heroVideo from "../assets/images/hero/hero2.mp4";

// Store video path immediately - no lazy loading
const VIDEO_PATH = heroVideo;

const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Set video loaded to true immediately to show video
  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  // Preload video IMMEDIATELY - NO LAZY LOADING - Execute synchronously
  useEffect(() => {
    const videoPath = VIDEO_PATH;
    
    // Add preload link to head for immediate video loading - highest priority
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = videoPath;
    link.setAttribute('fetchpriority', 'high');
    link.setAttribute('crossorigin', 'anonymous');
    document.head.insertBefore(link, document.head.firstChild);
    
    // Create preload video element to force immediate loading
    const preloadVideo1 = document.createElement('video');
    preloadVideo1.preload = 'auto';
    preloadVideo1.muted = true;
    preloadVideo1.autoplay = true;
    preloadVideo1.playsInline = true;
    preloadVideo1.style.display = 'none';
    preloadVideo1.style.position = 'absolute';
    preloadVideo1.style.width = '1px';
    preloadVideo1.style.height = '1px';
    preloadVideo1.style.opacity = '0';
    preloadVideo1.style.pointerEvents = 'none';
    preloadVideo1.style.zIndex = '-9999';
    preloadVideo1.src = videoPath;
    document.body.appendChild(preloadVideo1);
    
    // Force immediate load and play
    preloadVideo1.load();
    preloadVideo1.play().catch(() => {});
    
    // Also set up the main video immediately
    if (videoRef.current) {
      const video = videoRef.current;
      video.src = videoPath;
      video.load();
      video.play().catch(() => {});
    }
    
    return () => {
      // Cleanup
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(preloadVideo1)) {
        document.body.removeChild(preloadVideo1);
      }
    };
  }, []);

  useEffect(() => {
    // Ensure video loads and plays immediately when component mounts - NO LAZY LOADING
    if (videoRef.current) {
      const video = videoRef.current;
      const videoPath = VIDEO_PATH;
      
      // Set source immediately - use stored path
      video.src = videoPath;
      
      // Force immediate loading - remove ALL lazy loading mechanisms
      video.setAttribute('preload', 'auto');
      video.removeAttribute('loading');
      
      // Set fetchpriority if supported - HIGHEST PRIORITY
      if ('fetchPriority' in video) {
        video.fetchPriority = 'high';
      }
      video.setAttribute('fetchpriority', 'high');
      
      // Explicitly disable lazy loading
      if ('loading' in video) {
        video.loading = 'eager';
      }
      
      // Remove any data attributes that might cause lazy loading
      video.removeAttribute('data-loading');
      video.removeAttribute('loading');
      
      // CRITICAL: Force immediate load FIRST - before event listeners
      video.load();
      
      const handleLoadedData = () => {
        setVideoLoaded(true);
        video.play().catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      };

      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      };

      video.addEventListener('loadeddata', handleLoadedData, { once: true });
      video.addEventListener('canplay', handleCanPlay, { once: true });
      
      // Set currentTime to 0 to force immediate load
      video.currentTime = 0;
      
      // Force network request immediately - call load() multiple times
      video.load();
      setTimeout(() => {
        video.load();
        video.play().catch(() => {});
      }, 0);
      setTimeout(() => {
        video.load();
        video.play().catch(() => {});
      }, 10);
      
      // Try to play immediately
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      }

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="hero">
      {/* Full background video - loads first */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
      >
        <source src={VIDEO_PATH} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Title overlay - appears after video loads */}
      <div className={`hero-title-overlay ${videoLoaded ? 'visible' : ''}`}>
        <h1 className="hero-title">
          <span>
            Achieve Your Dreams with <span className="highlight">Flexible</span>
          </span>
          <span>
            <span className="highlight">Online</span> & Distance Learning
          </span>
          <span>Programs</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
