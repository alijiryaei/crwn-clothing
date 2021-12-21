import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { CollectionPreview } from '../collection-preview/collection-preview.component';
const CollectionOverview = ({collection}) => (
  <div>
    {collection.map(({ title, id, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
    collection : selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview)
