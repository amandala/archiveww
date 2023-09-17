import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "./NextJsImage";
import { Fullscreen } from "yet-another-react-lightbox/plugins";

export default function Gallery({
  images,
  targetRowHeight,
}: {
  images: any;
  targetRowHeight: number;
}) {
  const [index, setIndex] = React.useState(-1);

  return (
    <div>
      <PhotoAlbum
        layout="rows"
        photos={images}
        targetRowHeight={targetRowHeight}
        onClick={({ index: current }) => setIndex(current)}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
      />
      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen]}
      />
    </div>
  );
}
