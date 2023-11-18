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
          text: "Blog",
          href: "/wicked-news",
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
