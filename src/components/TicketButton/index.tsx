import styles from "./index.module.scss";
import Image from "next/image";

import ticketButton from "/public/assets/TICKET_CLOUD.png";

const TicketButton = () => {
  return (
    <a
      className={styles.TicketButton}
      href="https://tickets.wickedwoods.ca"
      target="_blank"
    >
      <Image src={ticketButton} alt="Buy tickets" />
    </a>
  );
};

export default TicketButton;
