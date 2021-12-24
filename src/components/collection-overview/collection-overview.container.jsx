import React from "react";
import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionFetching} from "../../redux/shop/shop.selector";
import { useSelector } from "react-redux";


const CollectionOverviewComponent = WithSpinner(CollectionOverview)

const CollectionOverviewContainer = () => {
    const isLoading = useSelector(state => selectIsCollectionFetching(state))
    return(
        <CollectionOverviewComponent isLoading={isLoading}></CollectionOverviewComponent>
    )
}


export default CollectionOverviewContainer;
