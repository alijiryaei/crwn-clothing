import React from 'react';
import SHOP_DATA from './2.1 shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';
class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    return (
      <div>
        {this.state.collection.map(({ title, id, routeName, items }) => (
          <CollectionPreview id={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
