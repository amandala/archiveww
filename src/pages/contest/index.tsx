import { useState } from "react";

import {
  H1,
  JumboHeading,
  ListItem,
  Paragraph,
  UList,
} from "@/components/Typography";
import { dinBlack } from "@/styles/fonts";

import Image from "next/image";

import pageBackground from "/public/assets/backgrounds/green_haze-min.png";
import formBackground from "/public/assets/backgrounds/wicked_white-min.png";

import flier from "/public/assets/contest_subchakra.jpg";

import cx from "classnames";

import styles from "./index.module.scss";
import PageHead from "@/components/PageHead";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div
      id="mc_embed_shell"
      className={styles.Wrapper}
      style={{ backgroundImage: `url(${pageBackground.src})` }}
    >
      <PageHead
        page="Wicked Woods Ticket Giveaway"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Sign up for our wicked contest."
        url="wickedwoods.ca/contest"
      />

      <Image
        className={styles.Flier}
        alt="Sub Chakra holiday Mixer Flier"
        src={flier}
        style={{ objectFit: "contain" }}
      />
      <div id="mc_embed_signup" className={styles.Content}>
        <div>
          <JumboHeading className={styles.Holiday}>
            Ticket Giveaway
          </JumboHeading>
          <Paragraph className={styles.Desc}>
            Sign up for the Wicked Woods Music Festival mailing list to enter
            for your chance to win 1 ticket + early entry for Wicked Woods Music
            Festival August 30 - September 1, 2024.
          </Paragraph>

          <form
            style={{ backgroundImage: `url(${formBackground.src})` }}
            action="https://wickedwoods.us21.list-manage.com/subscribe/post?u=63135e975735cb2c754206634&amp;id=92b2cb40f5&amp;f_id=00f0f2e6f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className={cx(styles.Form, "validate")}
            target="_self"
          >
            <div id="mc_embed_signup_scroll">
              <div className={cx(styles.Field, "mc-field-group")}>
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required={true}
                  value={email}
                  onChange={(v) => setEmail(v.target.value)}
                />
                <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
              </div>
              <div className={cx(styles.Field, "mc-field-group")}>
                <label htmlFor="mce-FNAME">
                  First Name <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="FNAME"
                  className="required text"
                  id="mce-FNAME"
                  required={true}
                  value={first}
                  onChange={(v) => setFirst(v.target.value)}
                />
              </div>
              <div className={cx(styles.Field, "mc-field-group")}>
                <label htmlFor="mce-LNAME">Last Name </label>
                <input
                  type="text"
                  name="LNAME"
                  className=" text"
                  id="mce-LNAME"
                  value={last}
                  onChange={(v) => setLast(v.target.value)}
                />
              </div>
              <div className={cx(styles.Field, "mc-field-group")}>
                <label htmlFor="mce-PHONE">Phone Number </label>
                <input
                  type="text"
                  name="PHONE"
                  className="REQ_CSS"
                  id="mce-PHONE"
                  value={phone}
                  onChange={(v) => setPhone(v.target.value)}
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_63135e975735cb2c754206634_92b2cb40f5"
                  tabIndex={-1}
                />
              </div>

              <div className="mc-field-group">
                <select hidden name="CONTEST" className="" id="mce-CONTEST">
                  <option
                    defaultValue="Sub Chakra Holiday Mixer Giveaway"
                    value="Sub Chakra Holiday Mixer Giveaway"
                  >
                    Sub Chakra Holiday Mixer Giveaway
                  </option>
                </select>
              </div>
              <div className={styles.ButtonWrapper}>
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className={cx("button", styles.Button, dinBlack.className)}
                  value="Enter"
                />
              </div>
            </div>
          </form>
        </div>
        <div className={styles.TermsWrapper}>
          <H1>
            Sub Chakra Holiday Mixer WWMF Ticket Giveaway Terms and Conditions
          </H1>
          <Paragraph>
            By entering into this contest, you agree to the following terms and
            conditions:
          </Paragraph>
          <UList>
            <ListItem>No purchase is required for entries.</ListItem>
            <ListItem>
              You must be present at the Sub Chakra Holiday Mixer event in order
              to enter into this contest.
            </ListItem>
            <ListItem>
              Submissions of this form for entry into the contest are allowed
              between 8pm and midnight.
            </ListItem>
            <ListItem>
              You will be given a contest ticket for each entry into the
              giveaway. Please keep the ticket(s) on you to validate and claim
              your prize.
            </ListItem>
            <ListItem>
              You can acquire additional entries into this contest in exchange
              for a donation to the event&apos;s Donation Collection pool.
              Minimum of $5 donation is required for each additional entry. 100%
              of donations go directly to the WIN Shelter and Calgary Food Bank
              on behalf of Sub Chakra.
            </ListItem>
            <ListItem>
              The draw will take place at midnight, and the winner will be
              announced at the show. The winner will also be sent an email from
              Wicked Woods Music Festival with instructions on how to claim
              their prize.
            </ListItem>
          </UList>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
