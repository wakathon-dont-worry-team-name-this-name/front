import React from 'react';
import './FisrtAppleWatchUI.css'; // You'll need to create this CSS file



export const AppleWatchUI = () => {
  return (
  <div className="apple-header">
    <div className="apple-watch">
      <div className="watch-face-7">
        {/* Display the time and date */}
        <div className="date"></div>

      </div>

      <div className="watch-face-8">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">
          <div className="complication weather"></div>

        </div>
      </div>


      <div className="watch-face-9">
        {/* Display the time and date */}

        {/* Complications */}
        <div className="complications">
          <div className="complication weather"></div>

        </div>
      </div>


      <div className="watch-face-10">
        {/* Display the time and date */}
        <div className="date"></div>
      </div>
    </div>
  </div>
  );
}

export default AppleWatchUI;
