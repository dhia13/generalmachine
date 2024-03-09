"use client";

import React from "react";

const HeroVideo = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <style>{`
                .video-docker video {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .video-docker::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 1;
                }
            `}</style>
    </section>
  );
};

export default HeroVideo;
