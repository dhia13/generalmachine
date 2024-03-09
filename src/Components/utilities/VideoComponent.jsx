import React from "react";

export const VideoComponent = ({ video }) => {
  return (
    <ModalVideo
      thumb={video}
      thumbWidth={1024}
      thumbHeight={576}
      thumbAlt="Modal video thumbnail"
      video="/videos/video.mp4"
      videoWidth={1920}
      videoHeight={1080}
    />
  );
};
