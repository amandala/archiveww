import {
  H2,
  H4,
  Paragraph,
  OList,
  ListItem,
  JumboHeading,
} from "@/components/Typography";
import Image from "next/image";
import styles from "./index.module.scss";
import PageHead from "@/components/PageHead";
import logo from "/public/assets/2024logo.png";

export default function CodeOfConduct() {
  return (
    <div className={styles.Wrapper}>
      <PageHead
        page="Code of Conduct"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Wicked Woods Music Festival is committed to providing a safe,
          respectful and welcoming environment for all, regardless of race,
          national or ethnic origin, colour, religion, sex, gender identity or
          expression, sexual orientation, age or mental or physical disability."
        url="wickedwoods.ca/code-of-conduct"
      />
      <Image
        src={logo}
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
        <JumboHeading>Code of Conduct</JumboHeading>
      </div>
      <div className={styles.Content}>
        <H2>General Terms</H2>
        <Paragraph>
          The Wicked Woods Music Festival, hereinafter referred to as &quot;The
          Festival&quot;, is committed to fostering an environment that is
          inclusive, respectful, and secure for all attendees. This Code of
          Conduct establishes the guidelines we expect all participants to
          follow, ensuring that The Festival remains a vibrant, celebratory, and
          safe space for all.
        </Paragraph>
        <H2>1. Prohibited Items and Security Measures</H2>
        <OList type="a">
          <ListItem>
            All attendees are subject to thorough security checks upon entering
            the festival grounds for everyone&apos;s safety.
          </ListItem>
          <ListItem>
            Unauthorized, illicit, or potentially hazardous items will be
            confiscated.
          </ListItem>
          <ListItem>
            Prohibited items include, but are not limited to: weapons,
            controlled substances, unauthorized alcoholic beverages, glass
            containers, pets (with the exception of certified service animals),
            unauthorized recording equipment, laser pointers, and any other
            items deemed potentially harmful or disruptive by security
            personnel.
          </ListItem>
        </OList>
        <H2>2. Confidentiality and Non-Discrimination Policy</H2>
        <OList type="a">
          <ListItem>
            The Festival values and respects the intrinsic rights of all
            individuals. Discrimination of any kind is strictly forbidden.
          </ListItem>
          <ListItem>
            Attendees will not be excluded or removed based on unverified
            allegations or insinuations.
          </ListItem>
          <ListItem>
            All attendees have the right to partake in The Festival&apos;s
            activities, provided they adhere to this Code of Conduct.
          </ListItem>
        </OList>
        <H2>3. Defamation and Slander</H2>
        <OList type="a">
          <ListItem>
            Defamatory statements, whether oral or written, that could damage
            the reputation of an individual or associated entity, are strictly
            prohibited.
          </ListItem>
          <ListItem>
            Malicious acts or statements targeted at any individual, The
            Festival, or its affiliates will be dealt with gravely.
          </ListItem>
          <ListItem>
            Offenders risk immediate ejection, a permanent ban from subsequent
            WWMF events, and potential legal ramifications.
          </ListItem>
        </OList>
        <H2>4. Lost and Found Protocol</H2>
        <OList type="a">
          <ListItem>
            The Festival offers a Lost and Found service located at the human
            resources building within the festival site. However, we are not
            responsible for lost, damaged, or stolen personal belongings.
          </ListItem>
          <ListItem>
            Items not claimed within three days after the event may be disposed
            of at the discretion of The Festival.
          </ListItem>
          <ListItem>
            Reporting lost items should be done with a comprehensive description
            and contact details. Note: Return mailing costs for unclaimed items
            will not be covered by The Festival.
          </ListItem>
        </OList>
        <H2>5. Fire Prevention and Compliance</H2>
        <OList type="a">
          <ListItem>
            Open flames are unequivocally banned at The Festival.
          </ListItem>
          <ListItem>
            Violators of this rule, or those causing significant fire hazards,
            might be subjected to legal and financial consequences as mandated
            by local regulations.
          </ListItem>
          <ListItem>
            Items such as barbecues, propane devices, torches, and non-approved
            fire equipment are prohibited.
          </ListItem>
        </OList>
        <H2>6. Health, Safety, and Security Protocols</H2>
        <OList type="a">
          <ListItem>
            The well-being of attendees is our topmost priority. Suspicious or
            perilous behaviors should be reported to festival crew members or
            security personnel immediately.
          </ListItem>
          <ListItem>
            Distinguished by their unique uniforms, our crew and security are
            proficient in managing situations to ensure attendee safety.
          </ListItem>
        </OList>
        <H2>7. Accessibility Commitment</H2>
        <OList type="a">
          <ListItem>
            To promote inclusivity, The Festival offers a designated
            Accessibility Zone for attendees with mobility challenges. For
            additional support, kindly refer to our information booth.
          </ListItem>
        </OList>
        <H2>8. Sanctuary Provision</H2>
        <OList type="a">
          <ListItem>
            The Sanctuary, open around the clock, offers a serene space for
            attendees needing a moment of respite, overseen by empathetic
            volunteers.
          </ListItem>
        </OList>
        <H2>9. Outreach, Education, and Security</H2>
        <OList type="a">
          <ListItem>
            The Festival&apos;s Outreach Team is on hand for health, safety, and
            informational needs. They can provide guidance on safety protocols,
            directions, and general event details.
          </ListItem>
        </OList>
        <Paragraph>
          This Code of Conduct is legally enforceable. Breaches may lead to
          immediate eviction from the festival premises without compensation and
          potential legal actions. We encourage attendees to act with
          consideration, respect, and embody the ethos of The Festival for the
          enjoyment of all present.
        </Paragraph>
        <H2>Misconduct, Harassment, and Assault</H2>
        <Paragraph>
          The Wicked Woods Music Festival stands firm against all forms of
          misconduct, discrimination, and harassment. We anticipate all
          attendees to interact with mutual respect and adhere faithfully to the
          guidelines provided. Breaches of these guidelines may result in
          immediate repercussions, including potential legal implications.
        </Paragraph>
        <H2>1. Social Misconduct</H2>
        <OList type="a">
          <ListItem>
            The Festival strictly forbids any form of social misconduct.
          </ListItem>
          <ListItem>
            Actions that may be deemed as such include, but aren&apos;t
            restricted to: malicious or derogatory posts, comments targeting an
            individual&apos;s reputation, or creating an adverse environment
            based on any characteristic protected by laws or festival policies.
          </ListItem>
          <ListItem>
            Engaging in corruption, theft, embezzlement, or any unauthorized
            behaviors may lead to immediate eviction, a lasting ban, and
            possible legal actions.
          </ListItem>
        </OList>
        <H2>2. Sexual Discrimination, Harassment, and Assault</H2>
        <OList type="a">
          <ListItem>
            The Festival has zero tolerance for sexual discrimination,
            harassment, or assault.
          </ListItem>
          <ListItem>
            We are committed to tackling issues of sexual violence and
            challenging harmful stereotypes around this critical concern.
          </ListItem>
          <ListItem>
            Impermissible behaviors encompass derogatory comments, creating
            safety risks, endangering oneself or others, and theft.
          </ListItem>
        </OList>
        <H2>3. Definition of Harassment</H2>
        <OList type="a">
          <ListItem>
            Harassment consists of repeated or offensive comments or actions,
            including verbal or written remarks, gestures, or images that
            demean, insult, or intimidate based on bias or prejudice.
          </ListItem>
          <ListItem>
            Sexual harassment refers to unsolicited behaviors rooted in sex,
            sexual orientation, gender identity, or expression, such as
            unwarranted physical contact, intrusive inquiries about personal sex
            life, or inappropriate remarks about one&apos;s physical appearance.
          </ListItem>
        </OList>
        <H2>4. Post-Assault Protocols</H2>
        <OList type="a">
          <ListItem>
            The Festival&apos;s team receives extensive training on post-assault
            procedures, including potential risks of sexually transmitted
            infections from assaults and the critical nature of medical
            interventions like post-exposure prophylaxis.
          </ListItem>
          <ListItem>
            We are dedicated to providing victims of sexual assault with
            comprehensive, compassionate, unbiased, and trauma-informed support.
          </ListItem>
          <ListItem>
            Support includes immediate medical care, referrals to appropriate
            medical facilities or sexual assault services, and collaboration
            with law enforcement if necessary.
          </ListItem>
        </OList>
        <H2>5. Support for Survivors</H2>
        <OList type="a">
          <ListItem>
            Individuals impacted by sexual violence can access assistance
            through VictimLinkbc.ca or by dialing 1-800-563-0808.
          </ListItem>
          <ListItem>
            Attendees are encouraged to not only avoid misconduct but to also
            proactively aid others who might be subjected to harassment or feel
            threatened. Collective vigilance and mutual respect can
            significantly minimize such occurrences.
          </ListItem>
          <ListItem>
            Festival personnel, identifiable by their uniforms, stand ready to
            help attendees by coordinating with venue security, offering
            escorts, or delivering any required support to ensure
            everyone&apos;s safety.
          </ListItem>
        </OList>
        <H2>6. Confidentiality and Non-Disclosure</H2>
        <OList type="a">
          <ListItem>
            Respecting the privacy of our attendees, staff, and vendors, The
            Festival maintains the confidentiality of incident specifics and
            does not publicly disclose detailed reports.
          </ListItem>
          <ListItem>
            Responses to raised concerns will always prioritize everyone&apos;s
            safety and resonate with The Festival&apos;s core principles.
            Decisions regarding interventions and subsequent actions rest solely
            with The Festival&apos;s leadership.
          </ListItem>
        </OList>
        <H2>Dismissal and Banning of Offenders</H2>
        <H2>1. Consequences for Non-compliance</H2>
        <OList type="a">
          <ListItem>
            Attendees found in breach of the Wicked Woods Music Festival&apos;s
            Code of Conduct, or any acts of misconduct, will be subject to
            immediate repercussions.
          </ListItem>
          <ListItem>
            Violations might lead to an immediate ejection from the festival
            grounds, along with a 400-day exclusion from accessing the venue.
          </ListItem>
          <ListItem>
            Chronic or grave offenses may warrant a lifetime ban from any future
            events organized under the Wicked Woods Music Festival banner.
          </ListItem>
        </OList>
        <H2>2. Organizer&apos;s Discretion</H2>
        <OList type="a">
          <ListItem>
            The Festival&apos;s management holds the right to take necessary
            measures to maintain the safety and decorum of the festival,
            inclusive of evictions without offering a refund.
          </ListItem>
          <ListItem>
            In instances where the transgression is criminal, the management
            holds the right to collaborate with legal authorities.
          </ListItem>
        </OList>
        <H2>3. Ensuring Safety and Reporting</H2>
        <OList type="a">
          <ListItem>
            The Festival deeply values the participation and contributions of
            every attendee, crew member, volunteer, and patron. Our foremost
            priority is establishing a safe milieu for all.
          </ListItem>
          <ListItem>
            Attendees, upon witnessing or being informed of any breaches of the
            Code of Conduct or any inappropriate behavior, should promptly alert
            a festival crew member or security staff.
          </ListItem>
        </OList>
        <H2>4. Expected Behavior</H2>
        <OList type="a">
          <ListItem>
            Every attendee and staff member is anticipated to resonate with and
            manifest the values championed by the Wicked Woods Music Festival
            throughout the event&apos;s duration.
          </ListItem>
          <ListItem>
            We expect attendees to maintain an environment of mutual respect and
            cooperation. All demeaning, discriminatory, or harassing behaviors
            are unequivocally prohibited.
          </ListItem>
          <ListItem>
            We urge everyone to remain aware of their environment and the
            well-being of their fellow festival-goers. Immediate reporting of
            any unsuitable behaviors to event security is highly encouraged.
          </ListItem>
        </OList>
        <H2>Acknowledgment and Adherence</H2>
        <Paragraph>
          BY PARTICIPATING IN THE WICKED WOODS MUSIC FESTIVAL, EACH ATTENDEE
          PLEDGES TO RIGOROUSLY UPHOLD THIS CODE OF CONDUCT. Preserving a safe
          and collegial atmosphere for all involved is paramount. Non-compliance
          with these guidelines may culminate in immediate eviction, a 400-day
          barring period, or potentially an indefinite ban from all events
          linked with the Wicked Woods Music Festival.
        </Paragraph>
        <H4>Revised September 14, 2023</H4>
      </div>
    </div>
  );
}
