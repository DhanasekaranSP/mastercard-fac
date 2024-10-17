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

    useEffect(() => { fetchData() }, []);

    const [offeringCardsData, setOfferingCardsData] = useState<OfferingCardI[]>();

    const fetchData = async () => {
        const response = await getAllOfferingCards();
        setOfferingCardsData(response);
    }

    return (
        <div style={{ width: "-webkit-fill-available", display: "flex", flexDirection: "column" }}>
            {offeringCardsData?.map((offeringCard) => {
                return (
                    <OfferingCardTemplate id={offeringCard.id} cardName={offeringCard.cardName} cardImageUrl={offeringCard.cardImageUrl} applyNowUrl={offeringCard.applyNowUrl} rateFeesUrl={offeringCard.rateFeesUrl} cardheadLine={offeringCard.cardheadLine} cardDescription={offeringCard.cardDescription} annualFees={offeringCard.annualFees} issuerId={offeringCard.issuerId} categoryList={offeringCard.categoryList} specialFees={offeringCard.specialFees} />
                )
            })}
        </div>
    )
}
