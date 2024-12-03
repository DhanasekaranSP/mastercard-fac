import { Link } from 'react-router-dom';
import './OfferingCardTemplate.css'
import { OfferingCardI } from './model';

type OfferingCardTemplateProps = {
    offeringCard: OfferingCardI
}

export const OfferingCardTemplate = (props: OfferingCardTemplateProps) => {
    // const { cardName, cardDescription, cardheadLine, cardImageUrl, annualFees, applyNowUrl, rateFeesUrl, specialFees } = props;
    const { offeringCard } = props

    return (
        <div className="offering-card-template">
            <div>
                <div className="offering-card-title">
                    {offeringCard.cardName}
                </div>

                <div className="offering-card-content">

                    <div className="offering-card-content-image-side">
                        <Link to={offeringCard.applyNowUrl}>
                            <div className='offering-card-content-image'>
                                <img src={offeringCard.cardImageUrl} alt="Image" />
                            </div>
                        </Link>

                        <div className='offering-card-content-cta'>

                            <Link to={offeringCard.applyNowUrl}>
                                <button className='btn'>
                                    Apply now
                                </button>
                            </Link>

                            <Link to={offeringCard.rateFeesUrl}>
                                <div className='small-btn'>
                                    See Rates & fees
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="offering-card-content-description-side">
                        <div className="offering-card-content-description-side-card-headline">
                            {offeringCard.cardheadLine}
                        </div>

                        <div className="offering-card-content-description-side-card-description">
                            <ul >
                                {offeringCard.cardDescription.split('. ').map((line, i) => (
                                    <li style={{ paddingBottom: '8px' }} key={i}>{line.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="offering-card-charges">
                    <div className="offering-card-charges-section">
                        <div className='offering-card-charges-container'>
                            <div className='offering-card-charges-title'>
                                Annual Fee
                            </div>
                            <div className='offering-card-charges-description'>
                                ${offeringCard.annualFees}
                            </div>
                        </div>
                        {offeringCard.specialFees && (
                            <div className='offering-card-charges-container'>
                                <div className='offering-card-charges-title'>
                                    Special Fee
                                </div>
                                <div className='offering-card-charges-description'>
                                    ${offeringCard.specialFees}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
