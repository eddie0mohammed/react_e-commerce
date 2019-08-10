import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';

import './ShopPage.styles.scss';

import CollectionsOverview from '../../components/collections-overview/collectionsOverview';
import CollectionPage from '../collection/Collection';


class ShopPage extends Component {

    render() {
        return (
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={CollectionsOverview}/>
                    <Route exact path={`${this.props.match.path}/:collectionId`} component={CollectionPage} />
                </Switch>
                
            </div>
        )
    }
}


export default (ShopPage);