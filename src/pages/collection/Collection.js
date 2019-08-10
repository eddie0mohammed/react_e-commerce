import React from 'react'
import './Collection.styles.scss';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem'; 

const CollectionPage = (props) => {

    return (
        <div className="collection-page">
            <h2 className="title">{props.collection.title}</h2>
        
            <div className="items">
                {props.collection.items.map(item => {
                    return <CollectionItem key={item.id} item={item} />
                })}
            </div>



            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  

    return {
        // collection: state.shop.collections.find(collection => collection.id === COLLECTION_TO_MAP[ownProps.match.params.collectionId]),
        collection: state.shop.collections[ownProps.match.params.collectionId]
    }
}

export default connect(mapStateToProps)(CollectionPage)
