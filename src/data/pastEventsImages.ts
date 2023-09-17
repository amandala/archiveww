import poster2017 from "/public/assets/posters/2017.png";
import poster2018 from "/public/assets/posters/2018.png";
import poster2019 from "/public/assets/posters/2019.jpeg";
import poster2022_spring from "/public/assets/posters/2022-spring.jpeg";
import poster2022_fall from "/public/assets/posters/2022-fall.png";
import poster2023 from "/public/assets/posters/2023.png";

const posters = [
  {
    src: poster2023.src,
    width: poster2023.width,
    height: poster2023.height,
  },
  {
    src: poster2022_fall.src,
    width: poster2022_fall.width,
    height: poster2022_fall.height,
  },
  {
    src: poster2022_spring.src,
    width: poster2022_spring.width,
    height: poster2022_spring.height,
  },
  {
    src: poster2019.src,
    width: poster2019.width,
    height: poster2019.height,
  },
  {
    src: poster2018.src,
    width: poster2018.width,
    height: poster2018.height,
  },
  {
    src: poster2017.src,
    width: poster2017.width,
    height: poster2017.height,
  },
];

export const slides = posters.map((photo) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
  };
});

export default slides;
