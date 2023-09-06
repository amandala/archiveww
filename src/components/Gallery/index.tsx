import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import slides from "./slides";
import NextJsImage from "./NextJsImage";
import { Fullscreen } from "yet-another-react-lightbox/plugins";

export default function Gallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div>
      <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={300}
        onClick={({ index: current }) => setIndex(current)}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        // sizes={{
        //   size: "calc(100vw - 40px)",
        //   sizes: [
        //     { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
        //     { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
        //     { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        //   ],
        // }}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen]}
      />
    </div>
  );
}
