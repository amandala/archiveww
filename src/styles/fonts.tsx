import localFont from "next/font/local";

export const chunkyHeart = localFont({
  src: "../styles/chunky_heart_solid.otf",
  display: "swap",
  variable: "--chunky-heart",
});

export const dinCondensed = localFont({
  src: "../styles/DIN.ttf",
  display: "swap",
  variable: "--din-black",
});

export const dinBlack = localFont({
  src: "../styles/DIN_Black.ttf",
  display: "swap",
  variable: "--din-black",
});

export const dinBold = localFont({
  src: "../styles/DIN_Bold.ttf",
  display: "swap",
  variable: "--din-bold",
});

export const dinMedium = localFont({
  src: "../styles/DIN_Medium.ttf",
  display: "swap",
  variable: "--din-medium",
});
