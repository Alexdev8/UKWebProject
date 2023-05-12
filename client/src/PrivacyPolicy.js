import {AccordionBuildPrivacyPolicy} from "./Shared_components";

const listItems = [

    {
        id: "One",
        ariaExpanded: false,
        name: "Who we are",
        privacypolicytexte : "RoseCrown is a company that encompasses various brands. Whenever you visit, shop, create an account, or utilize our sites and applications, the information you provide is controlled by one of the members of the RoseCrown family of companies. You can find a list of the relevant data controllers here.",
        privacypolicytexte2: "",
        privacypolicytexte3: "",
        privacypolicytexte4: "",
        privacypolicytexte5: "",
        privacypolicytexte6: "",
        privacypolicytexte7: "",
        privacypolicytexte8: "",
        privacypolicytexte9: "",
        privacypolicytexte10: "",
        privacypolicytexte11: ""
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Type of information we collect",
        privacypolicytexte : "At RoseCrown, we collect two primary types of information: personal information (as defined in this policy) and anonymous information (as defined in this policy). We may also use personal and anonymous information to generate a third type of information known as aggregate information (also defined in this policy). Specifically, we collect :",
        privacypolicytexte2: "1) Registration Information: This includes details you provide when creating an account, participating in promotions, or linking your profile on a third-party site or platform to your registration account. Examples of such information may include your first name, last name, country of residence, gender, date of birth, email address, username, and password.",
        privacypolicytexte3: "2) Transaction Information: When you request information, contact Guest Services, make a purchase, return or exchange a product or service, we collect transaction-related information. This may include your postal address, telephone number, and payment details.Transaction Information: When you request information, contact Guest Services, make a purchase, return or exchange a product or service, we collect transaction-related information. This may include your postal address, telephone number, and payment details.",
        privacypolicytexte4: "3) Public Forum Information: If you participate in public forums on our sites and applications, such as posting publicly, we collect the information you provide in those forums.",
        privacypolicytexte5: "4) Direct Communication Information: We may collect information from one-to-one or limited group interactions that occur using our messaging, chat, posting, or similar functionality, where permitted by applicable law.",
        privacypolicytexte6: "5) Third-Party Information: We may obtain information from third-party sources, such as site or platform providers, regarding the use of our applications on third-party platforms or devices.",
        privacypolicytexte7: "6) Location Information: With your consent or where permitted by law, we may collect location information, which can be precise or approximate, provided by your mobile or other device when interacting with our sites, applications, or physical properties. This information may also be associated with your IP address or other online or device identifiers.",
        privacypolicytexte8: "7) Activity Information: We collect information about your use of our sites and applications, including the content you view or post, frequency of usage, and your preferences. This may also encompass the activity and usage of individuals authorized by you, such as through the creation of profiles under your RoseCrown account, for services like Disney+ or Hulu.",
        privacypolicytexte9: "8) Usage, Viewing, Technical, and Device Data: When you visit our sites, use our applications on third-party platforms, open our emails, or connect to our wireless Internet access services, we collect data such as your browser or device type, unique device identifier, IP address, and technical details related to your device and viewing behavior.",
        privacypolicytexte10: "9) Images: Still or video images captured by cameras or readers located on or around our physical properties may be collected.",
        privacypolicytexte11: "10) Call Recordings: When you contact our reservation centers or other guest services phone numbers, we may record and retain those calls for quality assurance and training purposes."
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "How we collect your information",
        privacypolicytexte : "",
        privacypolicytexte2: "1) At RoseCrown, we gather information provided by you when you make requests or purchases for our products, services, or information. This includes registering with us, participating in public forums or activities on our sites and applications, responding to guest surveys, visiting our physical properties, calling our reservation centers or other guest services phone numbers, or engaging with us through various devices. You have the option to provide information in different ways, including typing or using voice commands.",
        privacypolicytexte3: "2) We employ a range of technologies to collect information, including cookies, Flash cookies, pixels, tags, software development kits, application program interfaces, and web beacons. These technologies are utilized when you visit our sites and applications or use our applications on third-party sites or platforms, regardless of whether you are logged in or registered. For more details on online tracking technologies and advertising, including information on Do Not Track and how to disable cookies and make choices regarding data collection, please refer to our Online Tracking Technologies and Advertising section.",
        privacypolicytexte4: "3) In addition, we utilize analytics tools to gather information when you visit our sites and applications or use our applications on third-party sites or platforms.",
        privacypolicytexte5: "4) To ensure the accuracy and completeness of the information you provide or that we collect automatically, we may obtain data from other reliable sources. This may involve updating or supplementing the information you provided. For example, we may validate postal address information using third-party services. In such cases, applicable laws may require you to authorize the third party to share your information with us before we acquire it.",
        privacypolicytexte6: "",
        privacypolicytexte7: "",
        privacypolicytexte8: "",
        privacypolicytexte9: "",
        privacypolicytexte10: "",
        privacypolicytexte11: ""
    },
    {
        id: "Four",
        ariaExpanded: false,
        name: "Use of your information by RoseCrown Company",
        privacypolicytexte : "The specific member of the RoseCrown family of companies that acts as the data controller for your information is responsible for and may utilize your information for the purposes outlined in this policy. Other members of the RoseCrown family of companies may also access your information when they perform services on behalf of the data controllers (acting as data processors). Additionally, unless prohibited by applicable law, they may use the information for their own purposes as data controllers, in line with the purposes described in this policy.\n" +
            "\n" +
            "In compliance with relevant laws and subject to the available choices and controls provided to you, we may use the information collected from you or associated with your devices for the following purposes:",
        privacypolicytexte2: "1) Provision of Experiences, Products, and Services: We use your information to deliver the experiences, products, and services you request, view, engage with, or purchase from us.",
        privacypolicytexte3: "2) Communication and Feedback: We communicate with you regarding your account, transactions with us, and send you information or request feedback about features on our sites and applications, as well as notify you of any changes to our policies.",
        privacypolicytexte4: "3) Offers and Promotions: We may send you offers and promotions related to our own products and services, as well as third-party products and services.",
        privacypolicytexte5: "4) Personalization: We personalize content and experiences based on the information collected from you to enhance your interaction with our sites and applications.",
        privacypolicytexte6: "5) Targeted Advertising: We provide targeted advertising based on your activity on our sites and applications, as well as on third-party sites and applications. For more information about how we use your information for personalization and tracking, please refer to our Online Tracking Technologies and Advertising section.",
        privacypolicytexte7: "6) Operational Improvement: We use your information to operate, understand, optimize, develop, and improve our sites, applications, products, services, and overall operations. This includes utilizing guest survey research and analytics tools.",
        privacypolicytexte8: "7) Safety, Fraud Prevention, and Policy Compliance: We detect, investigate, and prevent activities that may violate our policies, pose safety issues, or involve fraudulent or illegal behavior.",
        privacypolicytexte9: "8) Product Recalls and Safety Issues: We may notify you of any product recalls or safety issues that are relevant to you.",
        privacypolicytexte10: "By using your information for these purposes, we aim to enhance your overall experience, ensure the provision of high-quality products and services, and maintain a safe and secure environment for our users.",
        privacypolicytexte11: ""
    },
    {
        id: "Five",
        ariaExpanded: false,
        name: "Sharing your information with other entities",
        privacypolicytexte : "We highly prioritize the security and confidentiality of your personal information. We do not disclose your personal information to any third party outside of the RoseCrown family of companies, except in the following limited circumstances. Please note that once we share your personal information with another company in the circumstances mentioned above, the information received by that company is controlled by their own privacy practices and policies.",
        privacypolicytexte2: "1) Sharing with Your Consent: We may share your personal information with carefully selected companies if you choose to allow us to do so. This enables these companies to send you offers and promotions regarding their products and services.",

        privacypolicytexte3: "2) Fulfilling Your Requests: If you request services that involve third-party partners, such as airlines, ground transportation providers, third-party hotels, travel insurance providers, or dining reservations at restaurants operated by third parties, we may share your personal information with those partners in order to fulfill your requests.",
        privacypolicytexte4: "3) Sharing on Third-Party Sites or Platforms: If you direct us to share your personal information with third-party sites or platforms, such as social networking sites, we may do so as per your instructions.",
        privacypolicytexte5: "4) Co-Branded Products or Services: We may collaborate with financial institutions to offer co-branded products or services, such as our co-branded RoseCrown Rewards Visa Card. However, we will only proceed with this if permitted by applicable law. In these cases, the financial institutions are strictly prohibited from using your personal information for any purposes other than those related to the co-branded products or services.",
        privacypolicytexte6: "5) National Geographic Partners: If you provide personal information to National Geographic Partners, a joint venture between RoseCrown and the National Geographic Society, that information may be shared with the National Geographic Society. Once shared, the information will be controlled by and subject to the privacy policy of the National Geographic Society.",
        privacypolicytexte7: "6) Hulu Service: If you utilize the Hulu service, please be aware that Hulu may share information with its business partners, including content programmers, distributors, device partners, and corporate owners, in order to offer and enhance the Hulu service. With your consent, Hulu may also share your viewing information, along with certain personal information, with these and other third parties.",
        privacypolicytexte8: "7) Service Providers: We may engage third-party companies to perform services on our behalf, such as package delivery, marketing and advertising, and customer service. However, these companies are strictly prohibited from using your personal information for any purposes other than those specifically requested by us or required by law.",
        privacypolicytexte9: "8) Legal Obligations and Safety: We may disclose your personal information to third parties when necessary to comply with legal obligations, enforce our Terms of Use or rules, ensure the safety and security of our guests and third parties, protect our rights and property, or respond to legal processes. We do so in good faith, believing that such disclosure is required by law.",
        privacypolicytexte10: "Rest assured that we take every precaution to safeguard your personal information and only share it in accordance with the circumstances outlined above or as otherwise permitted by applicable law.",
        privacypolicytexte11: ""
    },
    {
        id: "Six",
        ariaExpanded: false,
        name: "Your controls and choices ",
        privacypolicytexte : "We value your privacy and provide you with the ability to exercise control and make choices regarding the collection, use, and sharing of your information. These controls and choices, in accordance with applicable law, may include:",
        privacypolicytexte2: "1) Account Management: You can correct, update, or delete your registration account information. Subscriptions and Alerts: You can choose or modify your preferences for subscriptions, newsletters, and alerts. Marketing Communications: You can choose whether to receive offers and promotions from us or other companies that we think may interest you.",
        privacypolicytexte3: "2) Sharing with Other Companies: You can choose whether we share your personal information with other companies for their own offers and promotions. Targeted Advertising: You can control targeted advertising from various ad networks, partners, data exchanges, and marketing analytics and digital advertising service providers. This can be done through the Digital Advertising Alliance.",
        privacypolicytexte4: "3) Device-Based Advertising: You can control targeted advertising within applications by adjusting the settings on your device(s), such as resetting your device's advertising identifier or opting out of interest-based ads.",
        privacypolicytexte5: "4) Nielsen Digital Measurement: Non-panelists can choose to limit participation in Nielsen digital measurement research. For Hulu users, you can manage Nielsen Digital Ad Ratings settings on your Hulu Account page. For RoseCrown+ users, you can manage Nielsen Digital Ad Ratings settings on your RoseCrown+ Account page.",
        privacypolicytexte6: "5) Hulu Viewing Information: You can manage your preferences for sharing viewing information, along with certain personal information, on Hulu by accessing your account settings on your computer.",
        privacypolicytexte7: "6) Public Forum: You can request the removal of your personal information from a public forum on our sites or applications.",
        privacypolicytexte8: "7) Access and Correction: You can request access to the personal information we hold about you, as well as request its amendment or deletion.",
        privacypolicytexte9: "You can exercise these controls and choices through various methods, including visiting the Communication Choices section under the Privacy Controls tab, contacting Guest Services, following instructions in communications sent to you, or adjusting settings on your device or within applications. Opting out of interest-based ads can be done through the Digital Advertising Alliance or European Interactive Digital Advertising Alliance, or by using the opt-out mechanism provided in the \"Interest-Based Ads\" link in the footer of the site you are visiting.",
        privacypolicytexte10: "Please note that if you choose not to allow us to collect personal information from you, it may impact our ability to deliver certain experiences, products, and services to you, and some services may not be tailored to your interests and preferences. If the collection of personal information is mandatory, we will make this clear at the point of collection so that you can make an informed decision.",
        privacypolicytexte11: "If you have any questions about the personal information we process or retain about you and your rights regarding that information, please reach out to Guest Services. They will be able to assist you further."
    },
    {
        id: "Seven",
        ariaExpanded: false,
        name: "Children's privacy",
        privacypolicytexte : "We understand the importance of protecting the privacy of children, especially when collecting their personal information on our sites and applications. To ensure their privacy, we have implemented certain measures and practices:",
        privacypolicytexte2: "1) We understand the importance of protecting the privacy of children, especially when collecting their personal information on our sites and applications. To ensure their privacy, we have implemented certain measures and practices:",
        privacypolicytexte3: "2) Information Practices for Children: We provide parents with notifications regarding our information practices concerning children. This includes informing them about the types of personal information we may collect from children, the purposes for which we may use that information, and whether we may share it with third parties.",
        privacypolicytexte4: "3) Parental Consent: In compliance with applicable laws and our internal practices, we obtain parental consent before collecting personal information from children or before sending information about our products and services directly to children.",
        privacypolicytexte5: "4) Limited Collection of Information: When collecting personal information from children, we limit the collection to what is reasonably necessary for their participation in the specific online activity.",
        privacypolicytexte6: "5) Parental Access and Control: We provide parents with access to the personal information we have collected from their children. Parents also have the ability to request changes to that information or its deletion.",
        privacypolicytexte7: "For more detailed information about our practices regarding children's personal information in the United States, we encourage you to review our dedicated Children's Privacy Policy.",
        privacypolicytexte8: "Safeguarding the privacy of children is a priority for us, and we strive to ensure compliance with applicable laws and maintain a safe and secure environment for children using our sites and applications.",
        privacypolicytexte9: "",
        privacypolicytexte10: "",
        privacypolicytexte11: ""
    },
    {
        id: "Eight",
        ariaExpanded: false,
        name: "Data, Security, Integrity, and Retention",
        privacypolicytexte : "The security, integrity, and confidentiality of your information are extremely important to us at RoseCrown. We have implemented technical, administrative, and physical security measures that are designed to protect your information from unauthorized access, disclosure, use, and modification. We regularly review our security procedures to incorporate suitable new technology and methods. However, it's important to note that no security measures are perfect or completely impenetrable. We will retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.",
        privacypolicytexte2: "",
        privacypolicytexte3: "",
        privacypolicytexte4: "",
        privacypolicytexte5: "",
        privacypolicytexte6: "",
        privacypolicytexte7: "",
        privacypolicytexte8: "",
        privacypolicytexte9: "",
        privacypolicytexte10: "",
        privacypolicytexte11: ""
    }
    ,
    {
        id: "Nine",
        ariaExpanded: false,
        name: "Data transfer, storage and processing globally",
        privacypolicytexte : "We operate globally and may transfer your personal information to individual companies of RoseCrown or third parties in locations around the world for the purposes described in this privacy policy. Wherever your personal information is transferred, stored, or processed by us, we will take reasonable steps to safeguard the privacy of your personal information. These steps may include implementing standard contractual clauses where recognized by law, obtaining your consent, or other lawful means of transferring personal information.",
        privacypolicytexte2: "",
        privacypolicytexte3: "",
        privacypolicytexte4: "",
        privacypolicytexte5: "",
        privacypolicytexte6: "",
        privacypolicytexte7: "",
        privacypolicytexte8: "",
        privacypolicytexte9: "",
        privacypolicytexte10: "",
        privacypolicytexte11: ""
    }
    ,
    {
        id: "Ten",
        ariaExpanded: false,
        name: "Changes to this privacy policy",
        privacypolicytexte : "From time to time, it may be necessary for us to update and modify this privacy policy to align with new technologies, industry practices, regulatory requirements, or other reasons. If these changes are significant, we will notify you accordingly, and where required by applicable law, we will obtain your consent. We will make reasonable efforts to provide notice of any material changes to this policy. Notification of changes may be delivered to you through email using the last email address you provided us. Additionally, we may post notices of such changes on our sites and applications or use other means consistent with applicable law to inform you about the updates. We encourage you to review this privacy policy periodically to stay informed about how we collect, use, and protect your personal information. Your continued use of our services following any changes to this policy signifies your acceptance of those changes, subject to any requirements for obtaining your explicit consent as mandated by applicable law.",
        privacypolicytexte2: "",
        privacypolicytexte3: "",
        privacypolicytexte4: "",
        privacypolicytexte5: "",
        privacypolicytexte6: "",
        privacypolicytexte7: "",
        privacypolicytexte8: "",
        privacypolicytexte9: "",
        privacypolicytexte10: "",
        privacypolicytexte11: ""
    }

]
function PrivacyPolicy(){
    return(
    <>
        <section className="content-section-privacy-policy">
            <h1>Privacy Policy</h1>
            <p>
                This data protection policy outlines how we handle the information provided or gathered on our websites and applications, whether they are hosted on our digital platforms or offered through third-party sites or platforms. Additionally, it covers the processing of guest information that is given to us or collected by us offline, such as in our physical establishments like stores, theme parks, resorts, cruise ships, or through our guest call centers. We adhere to this privacy policy in accordance with the applicable laws in the locations where we operate. In certain instances, specific data protection notices related to particular products, practices, or regions may be provided, and they should be read in conjunction with this policy.
                <br></br><br></br>
                It's important to note that when you share information with us on a third-party site or platform (e.g., through our applications), that information may be collected separately by the third-party site or platform. The information we collect is governed by this privacy policy, while the information collected by the third-party site or platform is subject to their own privacy practices. Any privacy choices you have made on the third-party site or platform will not apply to how we use the information we have directly collected through our applications.
                <br></br><br></br>
                Furthermore, please be aware that our websites and applications may contain links to external sites that we do not own or control. We are not responsible for the privacy practices of those sites. We encourage you to exercise caution and review the privacy policies of other websites that may collect your personal information when you leave our sites or applications.
            </p>


            <AccordionBuildPrivacyPolicy listItems={listItems} />

        </section>
    </>)
}
export default PrivacyPolicy