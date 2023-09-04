import * as React from "react";

import PhotoAlbum from "react-photo-album";
// import Lightbox from "yet-another-react-lightbox";

// import Captions from "yet-another-react-lightbox/plugins/captions";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import slides from "./slides";

export default function Gallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div>
      {/* <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      /> */}

      {/* <Lightbox
        plugins={[Captions, Fullscreen, Slideshow]}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      /> */}
    </div>
  );
}
