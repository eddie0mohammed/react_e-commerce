import React from 'react'
import './collectionOverview.styles.scss';
import PreviewCollection from '../../components/previewCollection/PreviewCollection';


import {connect} from 'react-redux';

const collectionsOverview = (props) => {
    // console.log(Object.entries(props.collections));
    return (
        <div className="collections-overview">
            {Object.entries(props.collections).map(elem => {
                const {id, ...otherCollectionProps} = elem[1];
                    return <PreviewCollection key={id} {...otherCollectionProps}/>
                })}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: state.shop.collections
    }
}

export default connect(mapStateToProps)(collectionsOverview)
