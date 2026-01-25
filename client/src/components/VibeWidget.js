import React, { useState } from 'react';

const VibeWidget = () => {
  const [audio] = useState(new Audio('/golden hour (Lofi) - Lofitopía.mp3'));

  React.useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;

    const enableAudio = () => {
      audio.play().then(() => {
        const events = ['click', 'keydown', 'touchstart', 'mousemove', 'focus', 'scroll'];
        events.forEach(event =>
          document.removeEventListener(event, enableAudio)
        );
      }).catch(() => {
        // Keep listening
      });
    };

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        // Queue play on ANY user interaction
        const events = ['click', 'keydown', 'touchstart', 'mousemove', 'focus', 'scroll'];
        
        events.forEach(event =>
          document.addEventListener(event, enableAudio, { once: true, passive: true })
        );
      }
    };

    playAudio();

    return () => {
      audio.pause();
      // Cleanup
      const events = ['click', 'keydown', 'touchstart', 'mousemove', 'focus', 'scroll'];
      events.forEach(event =>
          document.removeEventListener(event, enableAudio)
      );
    };
  }, [audio]);

  return (
    <div className="vibe-widget">
      <div className="vibe-icon">
        <div className="equalizer">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </div>
      </div>
      <div className="vibe-content">
        <span className="vibe-label">Now Playing</span>
        <span className="vibe-track">Golden Hour (Lofi)</span>
      </div>
    </div>
  );
};

export default VibeWidget;
