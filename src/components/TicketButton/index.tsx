import styles from "./index.module.scss";

import Button from "../Button";

const TicketButton = () => {
  return (
    <Button
      className={styles.TicketButton}
      href="https://tickets.wickedwoods.ca"
    >
      Buy Tickets
    </Button>
  );
};

export default TicketButton;
