import { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterAccordionSectionProps } from "./model";

export const FilterAccordionSection = ({ items }: FilterAccordionSectionProps) => {

    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

    const handleCheckboxChange = (id: number) => {
        setCheckedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div>
            {items.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {item.children.map((child) => (
                                <ListItem key={child.id} dense>
                                    <ListItemText primary={child.label} />
                                    <Checkbox
                                        checked={!!checkedItems[child.id]}
                                        onChange={() => handleCheckboxChange(child.id)}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}
