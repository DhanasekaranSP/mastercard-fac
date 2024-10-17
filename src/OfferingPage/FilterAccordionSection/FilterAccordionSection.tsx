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
import { FilterItemI } from './model';

type FilterAccordionSectionProps = {
    filterData: FilterItemI[],
    setFilterData: (value: React.SetStateAction<FilterItemI[]>) => void
}

export const FilterAccordionSection = (props: FilterAccordionSectionProps) => {

    const { filterData, setFilterData } = props;

    const handleCheckboxChange = (childId: number, checked: boolean) => {
        console.log("handleCheckboxChange:", { childId, checked })
        const changedItems = filterData.map((parent) => {
            const changedChildItems = parent.childitems.map((child) => {
                if (child.id == childId) {
                    return { ...child, checked }
                }
                return child;
            })
            return { ...parent, childitems: changedChildItems };
        })
        setFilterData(changedItems);

    }

    return (
        <div className='filter-accordion-section'>
            <h2 style={{ fontWeight: "normal" }}>Filters</h2>
            {filterData?.map((filterItem) => (

                <Accordion key={filterItem.id}>
                    <AccordionSummary className='accordion-title' expandIcon={<ExpandMoreIcon />}>
                        <Typography>{filterItem.parentname}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className="accordion-list">
                            {filterItem.childitems.map(item => (
                                <FormControlLabel
                                    key={item.id}
                                    control={
                                        <Checkbox
                                            checked={item.checked ?? false}
                                            onChange={(_, checked) => { handleCheckboxChange(item.id, checked) }}
                                        />
                                    }
                                    label={<span className="accordion-item">{item.childname}</span>}
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


// changes
// const [selectedItems, setSelectedItems] = useState<{ title: string; item: string }[]>([]);

// const handleCheckboxChange = (titleName: string, itemName: string) => {
//     setSelectedItems((prevSelected) => {
//         const isSelected = prevSelected.some(
//             selected => selected.title === titleName && selected.item === itemName
//         );
//         const newSelected = isSelected
//             ? prevSelected.filter(selected => !(selected.title === titleName && selected.item === itemName))
//             : [...prevSelected, { title: titleName, item: itemName }];

//         logSelectedItems(newSelected); // Log selected items in a grouped manner
//         return newSelected;
//     });
// };
// const logSelectedItems = (selected: { title: string; item: string }[]) => {
//     const grouped = selected.reduce<{ [key: string]: string[] }>((acc, curr) => {
//         if (!acc[curr.title]) {
//             acc[curr.title] = [];
//         }
//         acc[curr.title].push(curr.item);
//         return acc;
//     }, {});

//     console.log("Selected Items:", grouped); // Log selected items grouped by title
// };