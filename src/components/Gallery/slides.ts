const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const googleLink = (id: string, width: number, height: number) =>
  `https://drive.google.com/uc?export=view&id=${id}`;

const localPhotos = [
  {
    id: "1UVe5OesG1vlSxikdrysFJxyQr-GtF2Sh",
    width: 1545,
    height: 1080,
  },
  {
    id: "1XZwVuStrB8NWqk05JA4TyKPUKmxwEEqX",
    width: 1406,
    height: 2500,
  },
  {
    id: "1uIZgbqNdzG92GRS4sD5xwbW59qSdf4H3",
    width: 1455,
    height: 1080,
  },
  {
    id: "18JLnKFGCakYPhHtaZxXKwljaH5dJZ7On",
    width: 2500,
    height: 1494,
  },
];

export const slides = localPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: googleLink(photo.id, width, height),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: googleLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export default slides;
