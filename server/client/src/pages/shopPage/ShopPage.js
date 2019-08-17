import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './ShopPage.styles.scss';

import CollectionsOverview from '../../components/collections-overview/collectionsOverview';
import CollectionPage from '../collection/Collection';

// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import * as actionCreators from '../../actions/actionCreators';
import Spinner from '../../components/spinner/Spinner';


const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {

    // state = {
    //     loading: true,
    // }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        // const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log(collectionsMap);
        //     this.props.updateCollection(collectionsMap);
        //     this.setState({loading: false});
        // })
        this.props.fetchCollections();
    }

    render() {
        const {isFetching} = this.props;
        return (
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props}/>}/>
                    <Route exact path={`${this.props.match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching : state.shop.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateCollection: (collectionsMap) => dispatch(actionCreators.updateCollections(collectionsMap)),
        fetchCollections: () => dispatch(actionCreators.fetchCollectionsStartAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);