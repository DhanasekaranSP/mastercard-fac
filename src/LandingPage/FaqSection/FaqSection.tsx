import './FaqSection.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useEffect, useState } from 'react';
import { getAllFaq } from '../../common/repo';
import { FaqSectionI } from './model';


export const FaqSection = () => {
    useEffect(() => { fetchData() }, []);
    const [faqData, setFaqData] = useState<FaqSectionI[]>();

    const fetchData = async () => {
        const response = await getAllFaq();
        setFaqData(response);
    }
    return (
        <div className='faq-section left-right-padding'>
            <h5 className='faq-section-title' style={{ fontSize: "1.5rem", fontWeight: "500", marginBottom: "1.5rem" }}>
                FAQ Section
            </h5>

            <div className='faq-section-accordion'>
                <div>
                    {faqData?.map((q) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    className='accordion-question'
                                >
                                    <>{q.question}</>
                                </AccordionSummary>
                                <AccordionDetails style={{ whiteSpace: "pre-line", paddingLeft: 0, paddingTop: 0, lineHeight: "150%" }}>
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

