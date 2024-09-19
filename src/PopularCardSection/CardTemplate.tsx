import './CardTemplate.css'
import { CardTemplateI } from './model'

export const CardTemplate = (props: CardTemplateI) => {
    const { title, description, imageUrl } = props;

    return (
        <div className='card-template'>
            <img className='card-image' src={imageUrl} />
            <div className='card-content'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>{description}</p>
            </div>
            <div className='card-cta'>
                <h5 className='card-cta-text primarycolor'>
                    View Card
                </h5>
                <span className="material-symbols-outlined primarycolor">
                    arrow_forward
                </span>
            </div>

        </div>
    )
}
