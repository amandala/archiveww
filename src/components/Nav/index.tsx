import NavColumn from "./NavColumn";

export function FestivalNav() {
  return (
    <NavColumn
      title="Festival"
      links={[
        {
          text: "Lineup",
          href: "/lineup",
        },
        {
          text: "FAQ",
          href: "/faq",
        },
        {
          text: "Ticket Info",
          href: "/tickets",
        },
        {
          text: "Get Involved",
          href: "/get-involved",
        },
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
        {
          text: "Stages",
          href: "/stages",
        },
        // {
        //   text: "Vendors",
        //   href: "/vendors",
        // },
        // {
        //   text: "Workshops",
        //   href: "/workshops",
        // },
        // {
        //   text: "Installations",
        //   href: "/art",
        // },
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
          text: "Blog",
          href: "/wicked-news",
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
          text: "Newsletter",
          href: "/subscribe",
        },
        {
          text: "Directory",
          href: "/contact",
        },
        {
          text: "Code of Conduct",
          href: "/code-of-conduct",
        },
        {
          text: "Terms",
          href: "/terms",
        },
      ]}
    />
  );
}
