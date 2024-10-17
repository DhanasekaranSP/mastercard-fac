import { Link } from 'react-router-dom';
import './OfferingCardTemplate.css'
import { OfferingCardI } from './model';

export const OfferingCardTemplate = (props: OfferingCardI) => {

    const { cardName, cardDescription, cardheadLine, cardImageUrl, annualFees, applyNowUrl, rateFeesUrl, specialFees } = props;

    return (
        <div className="offering-card-template">
            <div>
                <div className="offering-card-title">
                    {cardName}
                </div>

                <div className="offering-card-content">

                    <div className="offering-card-content-image-side">
                        <Link to={applyNowUrl}>
                            <div className='offering-card-content-image'>
                                <img src={cardImageUrl} alt="Image" />
                            </div>
                        </Link>

                        <div className='offering-card-content-cta'>

                            <Link to={applyNowUrl}>
                                <button className='btn'>
                                    Apply now
                                </button>
                            </Link>

                            <Link to={rateFeesUrl}>
                                <div className='small-btn'>
                                    See Rates & fees
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="offering-card-content-description-side">
                        <div className="offering-card-content-description-side-card-headline">
                            {cardheadLine}
                        </div>

                        <div className="offering-card-content-description-side-card-description">
                            <ul >
                                {cardDescription.split('. ').map((line, i) => (
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
                                ${annualFees}
                            </div>
                        </div>
                        {specialFees && (
                            <div className='offering-card-charges-container'>
                                <div className='offering-card-charges-title'>
                                    Special Fee
                                </div>
                                <div className='offering-card-charges-description'>
                                    ${specialFees}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
