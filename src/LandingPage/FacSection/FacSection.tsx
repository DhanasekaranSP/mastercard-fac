import './FacSection.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useEffect, useState } from 'react';
import { getAllFaq } from '../../common/repo';
import { FacSectionI } from './model';


export const FacSection = () => {
    useEffect(() => { fetchData() }, []);
    const [faqData, setFaqData] = useState<FacSectionI[]>();

    const fetchData = async () => {
        const response = await getAllFaq();
        setFaqData(response);
    }
    return (
        <div className='fac-section left-right-padding'>
            <h5 className='fac-section-title'>
                FAC Section
            </h5>

            <div className='fac-section-accordion'>
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

