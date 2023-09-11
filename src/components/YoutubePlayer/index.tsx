import YouTube from "react-youtube";

const YouTubePlayer = ({ videoId, opts }: { videoId: string; opts: any }) => {
  // Set up event handlers
  const onReady = (event: { target: any }) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error: any) => {
    console.error("YouTube Player Error:", error);
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      opts={opts}
    />
  );
};

export default YouTubePlayer;
