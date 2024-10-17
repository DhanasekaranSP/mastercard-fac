import { FilterAccordionSection } from "./FilterAccordionSection/FilterAccordionSection"
import { OfferingCardSection } from "./OfferingCardSection/OfferingCardSection"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './OfferingPage.css'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FilterItemI } from "./FilterAccordionSection/model";
import { getAllFilterCategories } from "../common/repo";
import { getSelectedFilterData } from "../common/util";

export const OfferingPage = () => {

    useEffect(() => { fetchData() }, []);
    const [filterData, setFilterData] = useState<FilterItemI[]>([]);
    const fetchData = async () => {
        const response = await getAllFilterCategories();
        setFilterData(response);
    }

    console.log("filterData:", filterData)
    console.log("Selected Items:", getSelectedFilterData(filterData))
    const selectedFilterData = getSelectedFilterData(filterData)

    return (
        <div>
            <Link to="/landing-page">
                <Button
                    variant="text"
                    style={{ color: "#cf4500" }}
                    startIcon={<ArrowBackIcon />}>
                    Go Back
                </Button>
            </Link>
            <div className='offering-page'>

                <FilterAccordionSection filterData={filterData} setFilterData={setFilterData} />
                <OfferingCardSection selectedFilterData={selectedFilterData} />
            </div>
        </div>
    )
}
