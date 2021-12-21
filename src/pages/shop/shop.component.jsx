import React from 'react';
import { Route } from 'react-router';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';



import {fetchCollectionStart} from '../../redux/shop/shop.actions'
import { connect } from 'react-redux';

import WihtSpinner from '../../components/with-spinner/with-spinner.component';



// const Ppp = WihtSpinner(CollectionOverview)
const CollectionOverviewWithSpinner = WihtSpinner(CollectionOverview)
const CollectionPagewWithSpinner = WihtSpinner(CollectionPage)

class ShopPage extends React.Component  {
  state  = {
    isLoading : false
  }
  unSubscribeFromSnapshot = null
  componentDidMount(){
   this.props.fetchCollectionStart()
  }

  render(){
    const {match} = this.props
  return(
  <div>
    <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>}></Route>
    <Route  path={`${match.path}/:collectionId`} render={(props) => <CollectionPagewWithSpinner isLoading={this.state.isLoading} {...props}/>}></Route>
  </div>
  )}
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart : () => dispatch(fetchCollectionStart())
})

export default connect(null , mapDispatchToProps)( ShopPage);
