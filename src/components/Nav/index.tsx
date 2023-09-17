import NavColumn from "./NavColumn";

export function FestivalNav() {
  return (
    <NavColumn
      title="Festival"
      links={[
        {
          text: "About",
          href: "/about",
        },
        {
          text: "FAQ",
          href: "/faq",
        },
        {
          text: "Tickets",
          href: "/tickets",
        },
        {
          text: "Camping",
          href: "/camping",
        },
        // {
        //   text: "Info Hub",
        //   href: "/workshops",
        // },
      ]}
    />
  );
}

export function ExperienceNav() {
  return (
    <NavColumn
      title="Experience"
      links={[
        {
          text: "Past Lineups",
          href: "/past-events",
        },
        // {
        //   text: "2024 Lineup",
        //   href: "/lineup",
        // },
        {
          text: "Stages",
          href: "/stages",
        },
        {
          text: "Vendors",
          href: "/vendors",
        },
        {
          text: "Workshops",
          href: "/workshops",
        },
        {
          text: "Art Installations",
          href: "/art",
        },
      ]}
    />
  );
}

export function SocialNav() {
  return (
    <NavColumn
      title="Social"
      links={[
        {
          text: "Instagram",
          target: "_blank",
          href: "https://www.instagram.com/wickedwoodsmusicfestival/",
        },
        {
          text: "Facebook",
          target: "_blank",
          href: "https://www.facebook.com/wickedwoodsmusicfestival/",
        },
        {
          text: "YouTube",
          target: "_blank",
          href: "https://www.youtube.com/channel/UCf9jtHeCdWzm5Jw5EJRgUkQ",
        },
        {
          text: "SoundCloud",
          target: "_blank",
          href: "https://soundcloud.com/wickedwoodsmusicfestival",
        },
        {
          text: "Spotify",
          target: "_blank",
          href: "https://open.spotify.com/user/3143apwuohawnuw3ujlij3ihrgbm",
        },
      ]}
    />
  );
}

export function ContactNav() {
  return (
    <NavColumn
      title="Contact"
      links={[
        {
          text: "Directory",
          href: "/about#directory",
        },
        {
          text: "Code of Conduct",
          href: "/code-of-conduct",
        },
        {
          text: "Terms & Conditions",
          href: "/terms",
        },
        {
          text: "Volunteer",
          href: "/volunteer",
        },
        {
          text: "Jobs",
          href: "/jobs",
        },
      ]}
    />
  );
}
