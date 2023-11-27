import {
  H2,
  H4,
  Paragraph,
  JumboHeading,
  ListItem,
  OList,
  Bold,
} from "@/components/Typography";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import WW_Sandy_Brown from "/public/assets/WW-sandy_brown.png";

import background from "/public/assets/backgrounds/prussian_blue-min.png";

import styles from "./index.module.scss";

export default function Terms() {
  return (
    <div
      className={styles.Wrapper}
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <PageHead
        page="Terms"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Wicked Woods Music Festival Terms of Service and Release of Liability and Waiver Agreement."
        url="wickedwoods.ca/terms"
      />
      <div className={styles.HeaderWrapper}>
        <Image
          className={styles.Logo}
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

        <JumboHeading>Terms and Conditions</JumboHeading>
      </div>
      <div className={styles.Content}>
        <div>
          <Paragraph className={styles.Ack}>
            Wicked Woods Music Festival acknowledges and expresses its gratitude
            to the Akisqnuk First Nations on whose sacred land we work, live,
            and celebrate. We recognize that our global community converges
            amongst the landscapes of Raven&apos;s Nest Resort and Campground,
            situated in the traditional territories of the Akisqnuk First
            Nations. It is here, amidst the Kootenay region&apos;s mountains,
            forests, and waters, that we craft the magic that is Wicked Woods
            Music Festival. We hope our guests will deeply resonate with and pay
            respect to the past, present, and future of the Akisqnuk peoples
            upon their arrival at the venue.
          </Paragraph>
        </div>
        <div>
          <H2>
            2024 Wicked Woods Music Festival Rules & Ticket Sales Policies
          </H2>
          <Paragraph>
            The following Rules & Policies form part of your sales agreement
            with the WW Music and Art Society (&quot;WW Society&quot;) for entry
            into the 2024 Wicked Woods Music Festival (the &quot;Event&quot;),
            which is held at the Raven&apos;s Nest Resort and Campground, which
            is located 4 km north of Fairmont Hot Springs, British Columbia on
            Hwy #93 and #95 (the &quot;Property&quot;). A map of the Event
            location is provided on our website. Please ensure that you have
            read and understood the Event Rules and Policies. WW Society will
            rely on the application of these Rules and Policies in the event of
            a dispute over any of the matters set out below:
          </Paragraph>
          <OList>
            <ListItem>
              <Paragraph>
                <Bold>This is a 19+ Event:</Bold> As stated in the Release of
                Liability and Waiver Agreement, every participant MUST BE 19
                YEARS OF AGE OR OLDER to enter the Event. There are no
                exceptions. Event staff will be verifying participants&apos;
                age, and you will be required to present a government-issued
                photo ID as a requirement for entry. Failure to present the
                required ID proving your identity and age will result in refused
                entry.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Exchanges and Refunds:</Bold> WW Society offers no
                exchange or refunds for tickets purchased for the Event,
                including advanced ticket sales, and whether the Event is
                terminated early, canceled due to extreme weather, forest fire,
                acts of nature, government regulation or other conditions beyond
                the control of WW Society. Please ensure that you will be able
                to attend the Event prior to purchasing your tickets.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Arrival Policy:</Bold> General Admission tickets include
                access to the Event from 9:00 a.m. Friday, August 30th, 2024. WW
                Society offers early access to the festival grounds from
                Thursday, August 29th, 2024, for a fee. Early Entry Fee rates
                will be released on the Event website prior to the festival. The
                Ticket Gate opens at 9:00am sharp on Thursday, August 29th,
                2024. Festival guests arriving before this time will not be
                allowed entry into the Event.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Online User Portal Account:</Bold> All approved online
                sales will automatically generate an individual User Portal
                under the purchaser&apos;s e-mail address. Upon receiving
                payment WW Society will email a transaction receipt which
                includes the Order ID # and instructions on how to log in to the
                User Portal to view the order online. The User Portal allows
                participants to review their order, update payment details for a
                payment plan, transfer items to another person and update other
                personal information. Closer to the festival date all
                participants will need to log into their User Portal to download
                their ticket to gain access to the festival. WW Society will
                email participants with instructions regarding how to download
                their tickets prior to the festival.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Data Collection Clause for Event Website:</Bold>
              </Paragraph>
              <OList type="a">
                <ListItem>
                  <Paragraph>
                    <Bold>Types of Data Collected: </Bold>
                    We may collect the following types of personal and
                    non-personal information from users:
                  </Paragraph>
                  <OList type="i">
                    <ListItem>
                      Personal Information: Name, email address, phone number,
                      postal address, and any other information voluntarily
                      provided by users during registration or ticket purchase.
                    </ListItem>
                    <ListItem>
                      Non-Personal Information: Browser information, device
                      type, IP address, cookies, and usage data collected
                      through analytics tools.
                    </ListItem>
                  </OList>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Purpose of Data Collection: </Bold> We collect user
                    data for the following purposes:
                  </Paragraph>
                  <OList type="i">
                    <ListItem>
                      Event Registration: To facilitate event registration and
                      ticket purchase. Communication: To send event updates,
                      confirmations, and important information related to the
                      event.
                    </ListItem>
                    <ListItem>
                      Analytics: To analyze user behavior on our website and
                      improve our services.
                    </ListItem>
                    <ListItem>
                      Marketing: To send promotional materials or offers related
                      to our events with user consent.
                    </ListItem>
                  </OList>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Data Sharing: </Bold>We may share user data with the
                    following third parties:
                  </Paragraph>

                  <OList type="i">
                    <ListItem>
                      Event Organizers: Information provided during event
                      registration may be shared with the event organizers.
                    </ListItem>
                    <ListItem>
                      Service Providers: We may use third-party service
                      providers for payment processing, analytics, and
                      marketing. These providers may have access to user data as
                      necessary for their services.
                    </ListItem>
                  </OList>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Data Security: </Bold>We take reasonable measures to
                    protect user data. However, please be aware that no method
                    of online transmission or storage is entirely secure.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>User Rights</Bold>
                    Users have the following rights regarding their data:
                  </Paragraph>
                  <OList type="i">
                    <ListItem>
                      Access: Users can request access to their personal data we
                      have collected.
                    </ListItem>
                    <ListItem>
                      Rectification: Users can request corrections to inaccurate
                      data.
                    </ListItem>
                    <ListItem>
                      Deletion: Users can request the deletion of their data,
                      subject to legal obligations.
                    </ListItem>
                    <ListItem>
                      Opt-out: Users can opt-out of receiving marketing
                      communications.
                    </ListItem>
                  </OList>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Cookies and Tracking Technologies</Bold>
                    We use cookies and similar tracking technologies to enhance
                    the user experience and gather information about user
                    interactions with our website. By using our website and
                    providing your information, you agree to the terms outlined
                    in this data collection clause and our privacy policy.
                  </Paragraph>
                </ListItem>
              </OList>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold> Images taken at the Event: </Bold> While performing,
                attending, volunteering, and/or working at Wicked Woods Music
                Festival, you consent to be photographed and/or filmed. Your
                image, your voice, any performance, any art and any likeness may
                be used for festival promotional purposes (unless otherwise
                stated in the contract). This footage may be displayed or
                disseminated without your consent or payment of compensation to
                you, and you release WW Society from any legal liability for
                such filming, photographing or dissemination. Any media,
                photography, or video, taken on the Property is subject to a
                mandatory, non-exclusive license to WW Society for promotional
                purposes. Any professional photography and videography are ONLY
                permitted on festival grounds with an official Wicked Woods
                Music Festival photo, video or press pass. Other than for
                personal use, all images, film, or video obtained at the
                festival may not be used without the prior written permission of
                WW Society.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Parking: </Bold> Parking is provided in a designated area
                on the Property. Due to the high volume of traffic entering the
                Property from Highway #93 and #95, WW Society works in
                coordination with law enforcement to control and direct traffic
                entering the Festival. Participants are to obey all traffic
                signs and directions to ensure safe, orderly entry and exit from
                the Festival. Participants of Wicked Woods Music Festival MUST
                NOT park on the shoulder of Highway #93 or #95 and must obey all
                traffic rules.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Camping: </Bold>General Admission tickets include free
                camping in the designated areas. Participants must only camp in
                these designated areas on the Property. WW Society reserves the
                right to remove participants and their personal effects for any
                participants found camping outside the designated areas.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Vehicle and personal effects search: </Bold>Participant
                admission is subject to compliance with all laws and facility
                rules and regulations. Participants must consent to reasonable
                examination & searches to ensure compliance with all provincial
                & federal laws, and facility rules & regulations. Please ensure
                you have consulted the banned items ListItem:
                https://www.wickedwoods.ca/code-of-conduct
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Alcohol and illegal substances: </Bold>Wicked Woods Music
                Festival prohibits guests from bringing alcohol onto the Event
                site. Any alcohol found in searches will be confiscated and
                dumped. Additionally, matters involving illegal substances will
                be turned over to the RCMP.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Camping Packages: </Bold>Wicked Woods Music Festival
                offers limited availability for exclusive camping options.
                Camping Packages consist of four designated areas on the
                Property as follows: Juniper Lot, Hidden Ridge, Raven&apos;s
                Nest, and Eagle&apos;s Nest. All Camping locations are subject
                to the same rules and policies:
              </Paragraph>
              <OList type="a">
                <ListItem>
                  <Paragraph>
                    <Bold>Camp within your allocated site: </Bold>Participants
                    of Camping Packages will be assigned a designated site.
                    Participants must only set up their campsite within that
                    designated space. Those failing to do so will be asked to
                    reconfigure their equipment to comply with this rule or risk
                    having their service canceled with no refund.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Site Reservations: </Bold>At this time, guests with
                    Glamping Packages cannot reserve a specific campsite. Guests
                    with a Reserved Camping Package will be assigned by Event
                    organizers at check-in. Guests wishing to camp in a group
                    are encouraged to arrive at check-in together and are also
                    encouraged to carpool.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Parking Passes: </Bold>Unless otherwise specified,
                    each Parking Pass is allocated a single parking spot.
                    Parking will be assigned on a first-come, first-serve basis.
                    Participants&apos; vehicles found parked in unauthorized
                    locations will be towed at the owner&apos;s expense.
                  </Paragraph>
                </ListItem>
              </OList>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Payment Plan: </Bold>WW Society offers Event tickets,
                Parking Pass, and Camping Package sales on an installment basis
                (the &quot;Payment Plan&quot;). The availability of ticket and
                services purchased under the Payment Plan is limited and the
                following policies apply:
              </Paragraph>
              <OList type="a">
                <ListItem>
                  <Paragraph>
                    <Bold>
                      Payment Plans Are Available Only on the Website:{" "}
                    </Bold>
                    Participants seeking to engage in a Payment Plan must
                    indicate so at the time of “checkout”.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Payment Frequency: </Bold>Participants may select the
                    frequency of their payment installments. The payment amounts
                    and dates will be displayed at checkout and will be sent out
                    in the &quot;order confirmation&quot; email issued after
                    ticket purchase by the Event organizers. The first
                    installment must be paid immediately at the time of
                    purchase. Guests can review their payment schedules via
                    their User Portal accounts.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Important Dates: </Bold>
                    All payment installments must be completed no later than
                    July 30, 2024. Failure to do so will result in the
                    cancellation of your ticket, with a credit applied to your
                    account.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Pre-Authorized Payments: </Bold>
                    By choosing the Payment Plan options, you hereby authorize
                    WW Society to collect monthly payments from your credit card
                    as set out in the agreed-upon payment schedule.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Providing Accurate Information: </Bold>
                    Any Participant who seeks to use the Payment Plan must:
                  </Paragraph>
                  <OList type="i">
                    <ListItem>
                      Provide accurate contact details in your online purchase
                      order.
                    </ListItem>
                    <ListItem>
                      Ensure sufficient funds available on the subject credit
                      card to pay the scheduled installment payments throughout
                      the payment period.
                    </ListItem>
                    <ListItem>
                      Contact WW Society regarding any dispute prior to the
                      monthly payment due date. If a Participant believes a
                      payment has been initiated incorrectly, they must email
                      sales@wickedwoods.ca immediately to address the issue.
                    </ListItem>
                  </OList>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Cancellation of Payment Plan: </Bold>Cancellation of a
                    Payment Plan order must be made PRIOR to the final
                    installment owing. Orders can only be canceled while in the
                    agreed-upon payment schedule. Once the final payment has
                    been made, there is no cancellation option available to the
                    Participant. Cancellations will not result in a refund but
                    may be credited to the ticket purchaser&apos;s online
                    account for a future Event purchase.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Credit of Canceled Payment Plan: </Bold>If a Payment
                    Plan is canceled WITHIN the agreed upon payment schedule
                    (before all installments have been completed), WW Society
                    may issue a credit to the Participant&apos;s online account
                    for future Event purchases.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <Paragraph>
                    <Bold>Cancellation is Final: </Bold>Once a cancellation of a
                    Payment Plan occurs, the relevant tickets, Parking Passes,
                    and Camping Package order items are released and will be
                    offered for sale to other Participants.
                  </Paragraph>
                </ListItem>
              </OList>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Conduct: </Bold>All Participants must comply with our code
                of conduct outlined here:{" "}
                <a
                  href="https://www.wickedwoods.ca/code-of-conduct"
                  target="_blank"
                >
                  https://www.wickedwoods.ca/code-of-conduct
                </a>
              </Paragraph>
              <Paragraph>
                Any participant who violates this Code of Conduct may be
                immediately removed from the festival grounds and have their
                Festival Wristband and parking/camping privileges revoked,
                without refund. Law enforcement may be notified.
              </Paragraph>
            </ListItem>
          </OList>
        </div>
        <div>
          <H2>Release of Liability and Waiver Agreement</H2>
          <Paragraph>
            This Release of Liability and Waiver Agreement (&quot;Release&quot;)
            is made and provided by the person signing below
            (&quot;Participant&quot;) to participate in the 2024 Wicked Woods
            Music Festival (“Event”) and all of the activities attended at the
            Event (&quot;Activities&quot;), including the camping services as
            hosted by the WW Music and Art Society (&quot;WW Society&quot;), a
            British Columbia Society and located at the Raven&apos;s Nest Resort
            and Campground on Highway #95 in British Columbia
            (&quot;Property&quot;), and for other good and valuable
            consideration, the Participant agrees to all Terms set forth in this
            Agreement.
          </Paragraph>
          <Paragraph>
            Participant acknowledges that entering into this Release is required
            as a condition to participating in the Event. The Effective Date of
            this Release is on the date of its execution and delivery by the
            Participant.
          </Paragraph>
          <OList>
            <ListItem>
              <Paragraph>
                <Bold>Assumption of Risk</Bold> Participant understands and is
                aware that the Activities involve inherent risks, dangers, and
                hazards. The Activities include, but are not limited to,
                dancing, walking, swimming, camping, and general recreation in
                conjunction with using the facilities and amenities located on
                the Property. The Participant may sustain serious injury,
                including but not limited to temporary or permanent disability,
                paralysis, death, and property damage. Such risks and dangers
                may be caused by the Participant&apos;s own actions or
                inactions, the actions or inactions of others who are also
                participating in the Activities, the condition of the Property,
                adverse weather conditions, the conduct of other Participants at
                the Event, or the negligence of WW Society, its affiliates, and
                their respective directors, officers, employees, agents,
                representatives, shareholders, successors, and assigns
                (&quot;Releasees&quot;). PARTICIPANT VOLUNTARILY AND FREELY
                ASSUMES ALL RISKS, DANGERS, AND HAZARDS THAT MAY OCCUR PURSUANT
                TO PARTICIPATING IN THE ACTIVITIES, INCLUDING THE RISK OF
                INJURY, DEATH, OR PROPERTY DAMAGE, WHETHER CAUSED BY NEGLIGENCE
                OF THE COMPANY OR OTHERWISE.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Participant&apos;s Representations.</Bold>
                Participant acknowledges and represents that: (1) Participant is
                qualified to participate in the Activities and is 19 years of
                age or older; (2) Participant will at all times wear appropriate
                attire for an outdoor music festival and while participating in
                the Activities as a an attendee of the Event; (3) Participant
                understands that unless they have purchased specific Camping
                Package, they are responsible for their own provision of
                overnight sleeping gear should they be camping at any time
                during the Event; (4) Participant shall at all times follow all
                the rules and regulations for the Activities and of the
                Property, including rules governing parking and camping services
                offered by Wicked Woods Music Festival, and any other rules and
                regulations that may be established or modified by WW Society,
                which are presently attached to this Agreement as “Schedule A -
                2024 Wicked Woods Music Festival Rules & Ticket Sales Policies”;
                (5) Participant has informed themselves about the Activities
                that will be involved in the Event, either by previous
                participation in the Activities or pursuant to his or her
                investigation; (6) Participant will not consume or be under the
                influence of any illegal substances at any time of participating
                in the Activities; (7) Participant has fully read and
                understands each of the provisions of this Release and
                acknowledges that the Participant is voluntarily waiving
                substantial legal rights, including the right to sue WW Society
                and the Releasees.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Release from Liability. </Bold>Participant hereby agrees
                to waive and release any and all claims which Participant has or
                may have in the future against WW Society and the Releasees
                arising from the participation of the Activities for any injury,
                temporary or permanent disability, death, damages, liabilities,
                expenses, costs, and/or causes of action, now known or
                hereinafter known in any jurisdiction in the world, whether
                caused by the negligence of WW Society, the Releasees, or by any
                other reason. Participant acknowledges and agrees that this
                Release is a complete release of any responsibility of WW
                Society and the Releasees for any injury, temporary or permanent
                disability, death, damages, liabilities, expenses, costs, and/or
                causes of action sustained by the Participant while
                participating in the Activities.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Indemnification. </Bold>Participant agrees to indemnify,
                defend, and hold WW Society, along with Releasees, harmless from
                and against any third-party claims, losses, liabilities,
                damages, expenses, and costs, including reasonable outside
                attorneys&apos; fees and court costs, to the extent arising out
                of the Participant&apos;s participation in the Activities,
                whether or not arising out of WW Society and its Releasees’ (1)
                negligence or willful misconduct; (2) violation of applicable
                law; or (3) material breach of any of the terms of this Release,
                and/or the Code of Conduct provided on the Wicked Woods Music
                Festival website at{" "}
                <a
                  href="https://www.wickedwoods.ca/code-of-conduct"
                  target="_blank"
                >
                  https://www.wickedwoods.ca/code-of-conduct
                </a>
                .
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>No Duty to Supervise. </Bold>Participant acknowledges and
                agrees that he or she is aware that WW Society and the Releasees
                have no duty to supervise the Activities of the Participant. The
                Releasees assume no responsibility or liability for the acts or
                omissions of WW Society, the Releasees, or any such related
                persons.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>COVID - 19.</Bold> The Participant acknowledges that the
                COVID-19 virus is highly contagious and may result in serious
                injury or death. As a condition of your ticket purchase, and by
                entering the Event you voluntarily agree to assume all risks and
                accept sole responsibility for any injury, illness, damage,
                loss, claim, liability, or expenses, of any kind, that you may
                experience or incur as a result of contracting the COVID - 19
                virus.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Entire Agreement. </Bold>This Release is the entire
                agreement between the parties with respect to the subject matter
                hereof and supersedes any prior agreement or communications
                between the parties, whether written, oral, electronic, or
                otherwise. Except as expressly provided in this Release, there
                are no representations, warranties, conditions, other agreements
                or acknowledgements, whether direct or collateral, express or
                implied, that form part of or affect this Release.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Governing Law. </Bold>
                This Release shall be governed by, and construed and enforced in
                accordance with, the laws in force in British Columbia,
                excluding any conflict of laws rules or principles which might
                refer such construction to the laws of another jurisdiction. The
                Parties hereto agree to submit to the exclusive jurisdiction of
                the courts of British Columbia and waive any objection relating
                to improper venue or inconvenience forum to the conduct of any
                proceeding in any such court.
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                <Bold>Severability. </Bold>
                In the event that any term or provision, or any portion of a
                provision, of this Release is held to be invalid, illegal, or
                unenforceable in any jurisdiction, such invalidity, illegality,
                or unenforceability shall not affect any other term or provision
                of this Agreement.
              </Paragraph>
            </ListItem>
            <Paragraph>
              <Bold>
                This Release of Liability and Waiver Agreement is available for
                download here:{" "}
                <a href="https://www.wickedwoods.ca/download_waiver.pdf">
                  https://www.wickedwoods.ca/download_waiver.pdf
                </a>
                . Please take the time to download this document and review the
                same with a lawyer if you are unsure of the meaning and
                implications of any of its terms. By digitally signing this
                Agreement, you acknowledge that you have had time to inform
                yourself of the meaning and implications of the document and you
                have read and understood all the Terms.
              </Bold>
            </Paragraph>
          </OList>
        </div>
        <H4>Revised November 22, 2023</H4>
      </div>
    </div>
  );
}
