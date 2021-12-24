import React from "react";
import CollectionPage from "./collection.component";
import { useSelector } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPageComponent = WithSpinner(CollectionPage);

const CollectionContainer = () => {
    const isLoading = useSelector( state => selectIsCollectionFetching(state));
    return(
       <CollectionPageComponent isLoading={isLoading} ></CollectionPageComponent>
    )
}

export default CollectionContainer;