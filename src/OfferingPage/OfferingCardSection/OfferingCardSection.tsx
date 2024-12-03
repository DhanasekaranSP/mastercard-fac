import { useEffect, useState } from "react"
import { ChildItemI } from "../FilterAccordionSection/model"
import { OfferingCardTemplate } from "./OfferingCardTemplate"
import { OfferingCardI } from "./model"
import { getAllOfferingCards } from "../../common/repo"

type OfferingCardSectionProps = {
    selectedFilterData: ChildItemI[]
}

export const OfferingCardSection = (props: OfferingCardSectionProps) => {
    const { selectedFilterData } = props;
    const [offeringCardsData, setOfferingCardsData] = useState<OfferingCardI[]>([]);
    useEffect(() => {
        fetchData();
    }, [selectedFilterData]);

    const fetchData = async () => {
        const response = await getAllOfferingCards();

        // Check if there are any selected filters
        const activeFilters = selectedFilterData.filter(item => item.checked);

        if (activeFilters.length === 0) {
            // If no filters are selected, show all cards
            setOfferingCardsData(response);
            return;
        }

        // Separate issuer and category filters for targeted filtering
        const issuerFilterIds = activeFilters
            .filter(item => response.some(card => card.issuer.id === item.id))
            .map(item => item.id);

        const categoryFilterIds = activeFilters
            .filter(item => !issuerFilterIds.includes(item.id))
            .map(item => item.id);

        // Filter cards based on selected issuer and category filters
        const filteredCards = response.filter((offeringCard) => {
            // Check if the card's issuer is in the selected issuers
            const matchesIssuer = issuerFilterIds.includes(offeringCard.issuer.id);

            // Check if the card's categories match the selected categories
            const matchesCategory = offeringCard.categoryList.some(category =>
                categoryFilterIds.includes(category.id)
            );

            // Show the card if it matches issuer or category filters
            return matchesIssuer || matchesCategory;
        });
        setOfferingCardsData(filteredCards);
    }

    console.log("offering data", offeringCardsData)

    return (
        <div style={{ width: "-webkit-fill-available", display: "flex", flexDirection: "column" }}>
            {offeringCardsData?.map((offeringCard) => {
                return (
                    // <OfferingCardTemplate id={offeringCard.id} cardName={offeringCard.cardName} cardImageUrl={offeringCard.cardImageUrl} applyNowUrl={offeringCard.applyNowUrl} rateFeesUrl={offeringCard.rateFeesUrl} cardheadLine={offeringCard.cardheadLine} cardDescription={offeringCard.cardDescription} annualFees={offeringCard.annualFees} issuerId={offeringCard.issuerId} categoryList={offeringCard.categoryList} specialFees={offeringCard.specialFees} />
                    <OfferingCardTemplate offeringCard={offeringCard} />
                )
            })}
        </div>
    )
}





// const [offeringCardsData, setOfferingCardsData] = useState<OfferingCardI[]>([]);
// const [filteredOfferingCards, setFilteredOfferingCards] = useState<OfferingCardI[]>([]);
// const selectedIds = selectedFilterData.map(card => card.id);

// useEffect(() => {
//     fetchData();
// }, []);

// useEffect(() => {
//     filterOfferingCards();
// }, [selectedFilterData, offeringCardsData]);

// const fetchData = async () => {
//     const response = await getAllOfferingCards();
//     setOfferingCardsData(response);
// }
// console.log("offering data", offeringCardsData)

// const filterOfferingCards = () => {
//     if (selectedFilterData.length === 0) {
//         // If no filter is selected, show all cards
//         setFilteredOfferingCards(offeringCardsData);
//         return;
//     }
//     if (selectedFilterData.length >= 1) {
//         const filteredCards = offeringCardsData.filter(card => {
//             // Check if card matches either category list or issuer id
//             const matchesCategory = card.categoryList.some(category => selectedIds.includes(category.id));
//             const matchesIssuer = selectedFilterData.some(filter => filter.id === card.issuer.id);

//             // Return true if either condition is satisfied
//             // console.log("matched: ", { matchesIssuer, matchesCategory })
//             return (matchesCategory || matchesIssuer);
//         });
//         setFilteredOfferingCards(filteredCards);
//     }
// }



// ____________________________________________
// if (selectedFilterData.length >= 1) {
//     const filteredCards = offeringCardsData.filter(card => {
//         return card.categoryList.some(category => selectedIds.includes(category.id));
//     });
//     setFilteredOfferingCards(filteredCards);
// }

// if (selectedFilterData.length >= 1) {
//     // If one filter is selected, show cards that match the filter
//     const filteredCards = offeringCardsData.filter((card) => {
//         return selectedFilterData.some((filter) => filter.id === card.issuer.id);
//     });
//     setFilteredOfferingCards(filteredCards);
//     return;
// }