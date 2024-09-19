import './SpecialCardSection.css'
import { SpecialCardTemplate } from './SpecialCardTemplate'
import { specialCard } from './constant'


export const SpecialCardSection = () => {
    return (
        <div className='special-card-section left-right-padding' style={{ display: 'flex', flexDirection: 'column', gap: "16px" }}>
            <div>
                <h5>
                    Our most Popular Credit and Debit Cards and their Benefits
                </h5>
                Get the financial freedom you deserve. Credit cards offer rewards, services and spending power that can help make your financial and personal dreams come true.
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: "16px", justifyContent: "space-around" }}>
                {specialCard.map((specialcard) => {
                    return (
                        <SpecialCardTemplate id={specialcard.id} imageUrl={specialcard.imageUrl} title={specialcard.title} description={specialcard.description} ctaname={specialcard.ctaname} />
                    )
                })}
            </div>
        </div>
    )
}
