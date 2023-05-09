import {AccordionBuildPrivacyPolicy} from "./Shared_components";

const listItems = [

    {
        id: "One",
        ariaExpanded: false,
        name: "Who we are",
        privacypolicytexte : "RoseCrown is a company that encompasses various brands. Whenever you visit, shop, create an account, or utilize our sites and applications, the information you provide is controlled by one of the members of the RoseCrown family of companies. You can find a list of the relevant data controllers here.",
        description: "test",
    },
    {
        id: "Two",
        ariaExpanded: false,
        name: "Who we are",
        privacypolicytexte : "blablabl \n blablablaa",
        description: "test",
    },
    {
        id: "Three",
        ariaExpanded: false,
        name: "Who we are",
        privacypolicytexte : "blablabl \n blablablaa",
        description: "test",
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