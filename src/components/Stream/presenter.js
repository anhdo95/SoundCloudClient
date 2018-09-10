import React from "react";

function Stream({ tracks = [] }) {
  return (
    <div>
      <div>
        {tracks.map((track, key) => {
          return (
            <div className="track" key={key}>
              {track.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stream;
