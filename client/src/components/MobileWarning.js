import React, { useState } from 'react';

const MobileWarning = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="mobile-warning">
      <div className="mobile-warning-content">
        <h3>Oops! You Found the Mobile Version</h3>
        <p>
          Congratulations! You're experiencing the "under construction" phase of responsive design.
          Because who needs mobile optimization when you can just tell people to "view on desktop"?
        </p>
        <p className="mobile-warning-subtitle">
          (Translation: I'm still making this look pretty on phones. Check back soon!)
        </p>
        <button 
          className="mobile-warning-btn"
          onClick={() => setIsDismissed(true)}
        >
          I'll Suffer Through It Anyway
        </button>
      </div>
    </div>
  );
};

export default MobileWarning;
