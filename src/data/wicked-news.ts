import { cozyCamp } from "./articles/cozy-camp";
import { festivalTotems } from "./articles/festival-totems";
import { historyOfTheLand } from "./articles/history-of-the-land";

import cozyCampCover from "/public/assets/articles/cozy-camp-cover.png";
import festivalTotemsCover from "/public/assets/articles/festival-totems-cover.png";
import historyOfTheLandCover from "/public/assets/articles/history-of-the-land-cover.png";

export const wickedNewsData = [
  {
    slug: "history-of-the-land",
    cover: historyOfTheLandCover,
    title: "History of the Land",
    published: "March 24, 2023",
    subtitle: "Treasured space for centuries",
    photos: [],
    text: historyOfTheLand,
  },
  {
    slug: "festival-totems",
    published: "April 2, 2023",
    cover: festivalTotemsCover,
    title: "Festival Totems",
    subtitle: "A cretaive way to stand out in the crowd",
    photos: [],
    text: festivalTotems,
  },
  {
    slug: "cozy-camp",
    published: "May 10, 2023",
    cover: cozyCampCover,
    title: "Cozy Camp",
    subtitle: "Tips for creating your wicked home base",
    photos: [],
    text: cozyCamp,
  },
  //   {
  //     slug: "bear-aware",
  //     published: "June 6, 2023",
  //     cover: "hi",
  //     title: "Bear aware at Wicked Woods",
  //     subtitle: "Essential Bear safety tips",
  //     photos: [],
  //     text: ["This is a test"],
  //   },
];
