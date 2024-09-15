import './IssuerLogoSection.css'
import SbLogo from "../assets/images/sb-issuer-logo.jpeg"
import LbLogo from "../assets/images/lb-issuer-logo.jpeg"

export const IssuerLogoSection = () => {
    return (
        <>
            <div className='issuer-logo-section'>
                <h5 className="issuer-logo-title">
                    Find a Mastercard from your favorite financial institution
                </h5>

                <div className="issuer-logo-icon">
                    <img src={SbLogo} alt="" />
                    <img src={LbLogo} alt="" />
                </div>
            </div>

            <div className='benifits-hyperlink'>
                <p>For Mastercard Benefit inquiries please reach out to <span onClick={() => {
                    window.open('https://www.mastercard.us/content/dam/mccom/global/documents/global-services-phone-numbers.pdf', '_blank');
                }} className='hyperlink-ms primarycolor'>Mastercard Global EmergencyServices (PDF, 307 KB).</span></p>
            </div>
        </>
    )
}
