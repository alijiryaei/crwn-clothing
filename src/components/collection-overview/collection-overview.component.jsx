import React from 'react';
import './collection-overview.styles.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { useSelector } from 'react-redux';

const CollectionOverview = () => {
  const collection = useSelector( state => selectCollectionsForPreview(state))
  return(
  <div>
    {collection.map(({ title, id, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
  </div>
)
};


export default CollectionOverview;
