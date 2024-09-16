import './FacSection.css'
import { facquestionanswer } from './constants';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const FacSection = () => {

    return (
        <div className='fac-section'>
            <h5 className='fac-section-title'>
                FAC Section
            </h5>

            <div className='fac-section-accordion'>
                <div>
                    {facquestionanswer.map((q) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    className='accordion-question'
                                >
                                    <>{q.question}</>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <>{q.answer}</>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

