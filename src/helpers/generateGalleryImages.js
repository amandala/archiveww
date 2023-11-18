export const generateGalleryImages = (images) => {
  const imageList = images.keys().map((image) => images(image));
  return imageList
    .map((image) => {
      return {
        src: image.default.src,
        width: image.default.width,
        height: image.default.height,
      };
    })
    .sort((a, b) => a.src.localeCompare(b.src));
};
