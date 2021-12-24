import React ,{Suspense, useEffect}from 'react';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component';
// import CollectionContainer from '../collection/collection.container';


const CollectionOverviewContainer = React.lazy(() => import('../../components/collection-overview/collection-overview.container'))
// const CollectionPage = React.lazy(() => import('../collection/collection.component'))
const CollectionContainer = React.lazy(() => import('../collection/collection.container'))

const ShopPage = ({match}) =>  {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  },[fetchCollectionStart]);


  return(
  <div>
    <Suspense fallback={<Spinner></Spinner>}>
    <Route exact path={`${match.path}`} render={ props => <CollectionOverviewContainer {...props}></CollectionOverviewContainer>}></Route>
    <Route  path={`${match.path}/:collectionId`} render={ props => <CollectionContainer {...props}></CollectionContainer>}></Route>
    </Suspense>
  </div>
  )
};



export default  ShopPage;