// "use client";

import YouTube from "react-youtube";

import styles from "./index.module.scss";
// import YouTubePlaylist from "@codesweetly/react-youtube-playlist";

const YouTubePlayer = ({ videoId, opts }: { videoId: string; opts?: any }) => {
  const onReady = (event: { target: any }) => {
    const player = event.target;

    player.mute();
    player.playVideo();
  };

  const onEnd = (event: { target: any }) => {
    const player = event.target;

    if (opts.loop && opts.loop === 1) player.playVideo();
  };

  const onError = (error: any) => {
    console.error("YouTube Player Error:", error);
  };

  return (
    // <YouTubePlaylist
    //   apiKey="AIzaSyA50Uzym_K8zkI35Q24qNK12vHNftCv6ZU"
    //   playlistId="PL2ww8u3Xjlpyr-ckPRH42OpZ7fGRrG8XQ"
    //   uniqueName="Wicked Live Series"
    // />

    <YouTube
      // style={{ margin: "0 auto" }}
      className={styles.Wrapper}
      videoId={videoId}
      onReady={onReady}
      onError={onError}
      onEnd={onEnd}
      opts={{ iv_load_policy: 3, rel: 0, ...opts, loop: 1 }}
    />
  );
};

export default YouTubePlayer;
