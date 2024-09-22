import './SpecialCardTemplate.css'
import { SpecialCardTemplateI } from './model'

export const SpecialCardTemplate = (props: SpecialCardTemplateI) => {
    const { imageUrl, title, description, ctaname } = props;
    return (
        <div className='special-card-template'>
            <img className='special-card-image' src={imageUrl} />

            <div className='special-card-content'>
                <h4 className='special-card-title'>{title}</h4>
                <p className='special-card-text'>{description}</p>
            </div>

            <div className='special-card-cta'>
                <h5 className='special-card-cta-text primarycolor'>
                    {ctaname}
                </h5>
                <span className="material-symbols-outlined primarycolor">
                    arrow_forward
                </span>
            </div>

        </div>
    )
}
