import styles from "./index.module.scss";

const TicketButton = () => {
  return (
    <a
      className={styles.TicketButton}
      href="https://tickets.wickedwoods.ca"
      target="_blank"
    >
      Buy Tickets
    </a>
  );
};

export default TicketButton;
