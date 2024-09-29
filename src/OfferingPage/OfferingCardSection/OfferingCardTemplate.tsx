import './OfferingCardTemplate.css'

export const OfferingCardTemplate = () => {
    return (
        <div className="offering-card-template">
            <div className="offering-card-title">
                Credit Card
            </div>

            <div className="offering-card-content">

                <div className="offering-card-content-image-side">

                    <div className='offering-card-content-image'>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png" alt="Image" />
                    </div>

                    <div className='offering-card-content-cta'>
                        <button className='btn'>
                            Apply now
                        </button>
                        <div className='small-btn'>
                            See Rates & fees
                        </div>
                    </div>
                </div>
                <div className="offering-card-content-description-side">
                    <div>
                        Card Description
                    </div>
                </div>
            </div>

            <div className="offering-card-charges">
                <div>
                    Amount
                </div>
            </div>
        </div>
    )
}
