import { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Checkbox,
    FormControlLabel,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FilterAccordionSection.css';
// import { Title } from './model';
import { TitleI } from './constants';

export const FilterAccordionSection = () => {
    // const [titles, setTitles] = useState<Title[]>([]);
    // useEffect(() => {
    //     const fetchTitles = async () => {
    //         const response = await fetch('/api/titles/');
    //         const data = await response.json();
    //         setTitles(data);
    //     };

    //     fetchTitles();
    // }, []);

    const [selectedItems, setSelectedItems] = useState<{ title: string; item: string }[]>([]);
    const handleCheckboxChange = (titleName: string, itemName: string) => {
        setSelectedItems((prevSelected) => {
            const isSelected = prevSelected.some(
                selected => selected.title === titleName && selected.item === itemName
            );
            const newSelected = isSelected
                ? prevSelected.filter(selected => !(selected.title === titleName && selected.item === itemName))
                : [...prevSelected, { title: titleName, item: itemName }];

            logSelectedItems(newSelected); // Log selected items in a grouped manner
            return newSelected;
        });
    };
    const logSelectedItems = (selected: { title: string; item: string }[]) => {
        const grouped = selected.reduce<{ [key: string]: string[] }>((acc, curr) => {
            if (!acc[curr.title]) {
                acc[curr.title] = [];
            }
            acc[curr.title].push(curr.item);
            return acc;
        }, {});

        console.log("Selected Items:", grouped); // Log selected items grouped by title
    };

    return (
        <div className='filter-accordion-section'>
            <h2 style={{ fontWeight: "normal", padding: "0px 12px" }}>Filters</h2>
            {TitleI.map((title) => (
                <Accordion key={title.id}>
                    <AccordionSummary className='accordion-title' expandIcon={<ExpandMoreIcon />}>
                        <Typography>{title.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="accordion-list">
                            {title.items.map(item => (
                                <FormControlLabel
                                    key={item.id}
                                    control={
                                        <Checkbox
                                            checked={selectedItems.some(
                                                selected => selected.title === title.name && selected.item === item.name
                                            )}
                                            onChange={() => handleCheckboxChange(title.name, item.name)}
                                        />
                                    }
                                    label={<span className="accordion-item">{item.name}</span>}
                                />
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};


// import { useState } from 'react'
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, List, ListItem, ListItemText } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { FilterAccordionSectionProps } from "./model";

// export const FilterAccordionSection = ({ items }: FilterAccordionSectionProps) => {

//     const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

//     const handleCheckboxChange = (id: number) => {
//         setCheckedItems((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     return (
//         <div>
//             {items.map((item, index) => (
//                 <Accordion key={index}>
//                     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                         <Typography>{item.title}</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <List>
//                             {item.children.map((child) => (
//                                 <ListItem key={child.id} dense>
//                                     <ListItemText primary={child.label} />
//                                     <Checkbox
//                                         checked={!!checkedItems[child.id]}
//                                         onChange={() => handleCheckboxChange(child.id)}
//                                     />
//                                 </ListItem>
//                             ))}
//                         </List>
//                     </AccordionDetails>
//                 </Accordion>
//             ))}
//         </div>
//     )
// }
