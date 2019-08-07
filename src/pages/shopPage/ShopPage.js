import React, { Component } from 'react'

import './ShopPage.styles.scss';
import data from './shop.data';
import PreviewCollection from '../../components/previewCollection/PreviewCollection';

class ShopPage extends Component {

    state = {
        collections: data

    }
    render() {
        return (
            <div className="shop-page">
                {this.state.collections.map(({id, ...otherCollectionProps}) => {
                    return <PreviewCollection key={id} {...otherCollectionProps}/>
                })}
                
            </div>
        )
    }
}

export default ShopPage;