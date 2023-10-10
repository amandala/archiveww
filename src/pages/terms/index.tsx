import {
  H2,
  H4,
  Paragraph,
  OList,
  ListItem,
  JumboHeading,
} from "@/components/Typography";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import WW_Sandy_Brown from "/public/assets/WW-sandy_brown.png";

import styles from "./index.module.scss";

export default function Terms() {
  return (
    <div className={styles.Wrapper}>
      <PageHead
        page="Terms"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Wicked Woods Music Festival Terms and Conditions."
        url="wickedwoods.ca/terms"
      />
      <div className={styles.Content}>
        <Image
          src={WW_Sandy_Brown}
          alt="Sandy Brown Wicked Woods Logo"
          priority
          style={{
            margin: "0 auto",
            maxWidth: "300px",
            height: "auto",
            display: "block",
            padding: "20px",
          }}
        />
        <div className={styles.HeaderWrapper}>
          <JumboHeading>Terms and Conditions</JumboHeading>
        </div>
        <Paragraph>
          Wicked Woods Music Festival acknowledges and expresses its gratitude
          to the Akisqnuk First Nations on whose sacred land we work, live, and
          celebrate. We recognize that our global community converges amongst
          the landscapes of Raven&apos;s Nest Resort and Campground, situated in
          the traditional territories of the Akisqnuk First Nations. It is here,
          amidst the Kootenay region&apos;s mountains, forests, and waters, that
          we craft the magic that is Wicked Woods Music Festival. We hope our
          guests will deeply resonate with and pay respect to the past, present,
          and future of the Akisqnuk peoples upon their arrival at the venue.
        </Paragraph>
        <H2>1. Event Terms</H2>
        <OList type="a">
          <ListItem>
            Wicked Woods Music Festival is a 19+ event. YOU MUST BE 19+ to enter
            this event, no exceptions. IDs will be checked.
          </ListItem>
          <ListItem>
            Government-issued photo ID is required for entry regardless of your
            age. Failure to present Photo ID proving your name and age will
            result in refused entry.
          </ListItem>
          <ListItem>
            No exchange or refunds on tickets, including if the event is
            terminated early, canceled due to extreme weather, forest fire, acts
            of nature, government regulation or other conditions beyond the
            control of The WW Music and Art Society. Please ensure that you will
            be able to attend the festival BEFORE purchasing your tickets.
          </ListItem>
          <ListItem>
            Wicked Woods Music Festival is held at Raven&apos;s Nest Resort and
            Campground in the Kootenay region of British Columbia, on the sacred
            land of the Akisqnuk First Nations.
          </ListItem>
          <ListItem>
            Festival guests arriving before 9:00 am on Thursday, August 29, 2024
            will not be allowed entry into the festival grounds. Gates open at
            9:00 am sharp; fees rollover on a 24hr cycle. Guests parked on the
            highway will be towed at the owner&apos;s expense.
          </ListItem>
          <ListItem>
            Guests can arrive on-site from Thursday, August 29, 2024 onwards for
            a fee per day. Fee rates will be released in the Spring of 2024 and
            must be paid upon arrival in cash only.
          </ListItem>
        </OList>
        <H2>2. Ticket and Wristband Terms</H2>
        <OList type="a">
          <ListItem>
            We have moved entirely to RFID Wristbands. Each RFID wristband will
            be linked to the Electronic ticket that is scanned at the Main Gate.
            Your personal information will only be shared at the Main Gate or in
            the event of an emergency.
          </ListItem>
          <ListItem>
            You assume the risk of the ticket being invalid at the door if you
            buy from other than authorized vendors.
          </ListItem>
          <ListItem>
            A ticket is a revocable license and may be revoked at any time, for
            any reason, without compensation.
          </ListItem>
          <ListItem>
            Any item is invalid if the barcode is duplicated, removed, or
            tampered with.
          </ListItem>
          <ListItem>
            As a condition of your ticket purchase, and by entering the venue
            you voluntarily agree to assume all the foregoing risks and accept
            sole responsibility for any: injury, illness, damage, loss, claim,
            liability, or expenses, of any kind, that you may experience or
            incur.
          </ListItem>
          <ListItem>
            Lastly, by entering the venue you also hereby release, covenant not
            to sue, discharge, and hold harmless the venue, event promoter(s),
            vendor(s), and each of their respective parent companies, members,
            partners, affiliates, divisions, subsidiaries, and landlords and
            their respective officers, directors, agents, and employees from
            claims of any kind.
          </ListItem>
        </OList>
        <H2>3. Assumption of Risk & Waiver of Liability</H2>
        <OList type="a">
          <ListItem>
            Relating to Coronavirus/COVID-19 The 2024 Wicked Woods Music
            Festival will operate in accordance with all applicable COVID-19
            health and safety protocols as laid out by the Ministry of Health
            and the Provincial Health Officer of British Columbia. These
            policies and mandates are quickly evolving, and as such the
            conditions under which the 2024 Wicked Woods Music Festival operates
            may also change. When you purchase a ticket, you agree to our terms
            and conditions, which stipulate that requirements for entry and
            attendance may change upon short notice.
          </ListItem>
          <ListItem>
            The World Health Organization declared the novel coronavirus,
            COVID-19, as a worldwide pandemic. COVID-19 is considered extremely
            contagious. The Wicked Woods Music Festival organizers have taken
            all reasonable steps to ensure compliance with existing COVID-19
            safety protocols so that your experience at our event is as safe as
            possible. However, it is impossible to eliminate the risk of
            infection entirely. By entering the venue, you acknowledge this risk
            and the contagious nature of COVID-19, and you voluntarily assume
            the risk that you may be exposed to or infected by COVID-19 and that
            such exposure or infection may result in personal injury, illness,
            permanent disability, and death.
          </ListItem>
          <ListItem>
            As a condition of your ticket purchase, and by entering the venue
            you voluntarily agree to assume all of the foregoing risks and
            accept sole responsibility for any: injury, illness, damage, loss,
            claim, liability, or expenses, of any kind, that you may experience
            or incur.
          </ListItem>
          <ListItem>
            Lastly, by entering the venue you also hereby release, covenant not
            to sue, discharge, and hold harmless the venue, event promoter(s),
            vendor(s), and each of their respective parent companies, members,
            partners, affiliates, divisions, subsidiaries, and landlords and
            their respective officers, directors, agents and employees from
            claims of any kind arising out of or relating to the matters set out
            in this Assumption Risk and Waiver of Liability relating to
            COVID-19.
          </ListItem>
        </OList>
        <H2>4. Payment Plans Terms & Conditions</H2>
        <OList type="a">
          <ListItem>
            The Wicked Woods Music Festival 2024 Payment Plan has a limited
            quantity of tickets and Camping/Parking Passes available.
          </ListItem>
          <ListItem>
            To take advantage of the Payment Plan, you must purchase your
            ticket(s) or Camping/Parking Passes at checkout on our ticketing
            website tickets.wickedwoods.ca.
          </ListItem>
          <ListItem>
            All Payment Plans must commence by May 1st, 2024. All installments
            must be completed no later than June 1st, 2024.
          </ListItem>
          <ListItem>
            The amount of the monthly installment will vary depending on the
            number of Payment Plan installments selected. The payment amounts
            and dates will be displayed at checkout and will be in your order
            confirmation email.
          </ListItem>
          <ListItem>
            By opting to use the Payment Plan to purchase your festival order,
            you authorize The WW Music and Art Society to arrange monthly
            payments that will be automatically deducted from your account on
            the same day of the following month from when you signed up, and
            every month thereafter until your payment is complete.
          </ListItem>
          <ListItem>
            The first installment must be paid immediately at the time of
            purchase.
          </ListItem>
          <ListItem>It is your responsibility to ensure that:</ListItem>
          <OList type="i">
            <ListItem>
              The contact details you have provided are correct.
            </ListItem>
            <ListItem>
              You notify The WW Music and Art Society (info@wickedwoods.ca) if
              your card details have changed.
            </ListItem>
            <ListItem>
              You have sufficient funds available on your credit card on the
              scheduled installment dates throughout the payment period. If you
              believe that a payment has been initiated incorrectly, please
              email info@wickedwoods.ca immediately so we can correct it.
            </ListItem>
            <ListItem>
              You are responsible for contacting The WW Music and Art Society
              regarding any dispute prior to the monthly payment due date.
            </ListItem>
          </OList>
          <ListItem>
            If you would like to cancel your Payment Plan order BEFORE the final
            installment has been paid and receive a credit on your account for a
            future purchase with The WW Music and Art Society, please contact
            info@wickedwoods.ca. *There are no refunds on Payment Plans.
          </ListItem>
          <ListItem>
            Canceling your Payment Plan releases your guaranteed ticket and
            other items in your order for that corresponding year, and the
            installments already paid will count as credit towards a future
            purchase with us.
          </ListItem>
          <ListItem>
            Please note: Orders can only be canceled and credited while in the
            &apos;Payment Period&apos;. No credits can be given past the Payment
            Plan &apos;Completion Date&apos; (once the final installation has
            been paid).
          </ListItem>
          <ListItem>
            As with all GA tickets and Camping/Parking Passes, orders purchased
            under the Payment Plan are non-refundable. The Wicked Woods Music
            Festival&apos;s Terms & Conditions apply.
          </ListItem>
          <ListItem>
            In the event that you are unable to make a payment on the designated
            date, please contact info@wickedwoods.ca as soon as possible.
          </ListItem>
          <ListItem>
            Orders purchased under the Payment Plan option will only be
            available to the purchaser after the final installment has been
            processed. Once final payment has been received, we will email you a
            WW transaction receipt which includes your Order ID # and log-in
            link to where you can access your order online. Your order will not
            appear on your online account until the final payment has been
            processed.
          </ListItem>
          <ListItem>
            All Payment Plan tickets and Camping/Parking Passes sales are
            subject to Wicked Woods Music Festival&apos;s Terms and Conditions.
          </ListItem>
        </OList>
        <H2>5. Camping and Parking Terms & Conditions</H2>
        <OList type="a">
          <ListItem>
            Guests with Camping/Parking Passes agree to the following terms and
            conditions listed below and agree to respect the parameters of their
            allocated site. Any guests found breaching this agreement will be
            advised to adjust their set-up to ensure it fits within their
            allocated site.
          </ListItem>
          <ListItem>
            Attendees are expected to behave in a manner that is courteous to
            all other campers. Wicked Woods Music Festival reserves the right to
            remove guests that cause a disturbance or participate in illegal
            activity from the festival grounds.
          </ListItem>
          <ListItem>
            Guests will be assigned a site by Wicked Woods Music Festival staff
            when they arrive at check-in. If guests want to camp in a group with
            their friends, you are advised to arrive at the ticket gate together
            and encouraged to carpool.
          </ListItem>
          <ListItem>
            Guests will have a designated parking area close to the
            Camping/Parking Passes designated zone for one vehicle. If guests
            have more than one vehicle, the additional vehicles will be parked
            in Free Parking. Guests should expect to park their vehicles and
            then carry their luggage to their site themselves.
          </ListItem>
          <ListItem>
            As a condition of your ticket purchase, and by entering the venue
            you voluntarily agree to assume all of the foregoing risks and
            accept sole responsibility for any: injury, illness, damage, loss,
            claim, liability, or expenses, of any kind, that you may experience
            or incur. Wicked Woods Music Festival is not responsible for any
            materials misplaced, lost or stolen. It is recommended that you do
            not bring valuable items. If you do bring valuable items, please
            lock them in your car. Do not leave valuable items in your tent.
          </ListItem>
          <ListItem>
            For any questions or concerns, please contact info@wickedwoods.ca or
            visit tickets.wickedwoods.ca for more information.
          </ListItem>
        </OList>
        <H4>Revised September 14, 2023</H4>
      </div>
    </div>
  );
}
