import { useState } from "react";

import { Bold, JumboHeading, Paragraph } from "@/components/Typography";
import { dinBlack } from "@/styles/fonts";

import pageBackground from "/public/assets/backgrounds/green_haze-min.png";
import formBackground from "/public/assets/backgrounds/orient_blue-min.png";

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
        page="Newsletter Signup"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Sign up for our mailing list and be the first to hear about ticket
          sales, applications, and other exciting news about our upcoming event."
        url="wickedwoods.ca/subscribe"
      />
      <div id="mc_embed_signup">
        <JumboHeading>Newsletter Sign-up</JumboHeading>
        <Paragraph className={styles.Desc}>
          Sign up for our mailing list and be the first to hear about ticket
          sales, applications, and other exciting news about our upcoming event.
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
                value=""
              />
            </div>
            <div
              className={cx(
                styles.Field,
                styles.Categories,
                "mc-field-group input-group"
              )}
            >
              <Paragraph>
                <Bold>Categories </Bold>
              </Paragraph>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="group[2021][1]"
                    id="mce-group[2021]-2021-0"
                    value=""
                  />
                  <label htmlFor="mce-group[2021]-2021-0">
                    Ways to get involved
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="group[2021][2]"
                    id="mce-group[2021]-2021-1"
                    value=""
                  />
                  <label htmlFor="mce-group[2021]-2021-1">
                    2024 Event Details and Offers
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="group[2021][4]"
                    id="mce-group[2021]-2021-2"
                    value=""
                  />
                  <label htmlFor="mce-group[2021]-2021-2">Everything!</label>
                </li>
              </ul>
            </div>
            <div className={styles.ButtonWrapper}>
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className={cx("button", styles.Button, dinBlack.className)}
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
