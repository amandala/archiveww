import React from "react";

const SpotifyPlaylist = ({
  playlistId,
  className,
}: {
  playlistId: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
