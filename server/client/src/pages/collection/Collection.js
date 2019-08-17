import React from 'react'
import './Collection.styles.scss';
import {connect} from 'react-redux';

// import * as actionCreators from '../../actions/actionCreators';

import CollectionItem from '../../components/collectionItem/CollectionItem'; 

class CollectionPage extends React.Component {

    // componentDidMount(){
    //     // this.props.fetchCollections()
    // }

    render(){
        // console.log(this.props.collection);
    return (
        <div className="collection-page">
            <h2 className="title">{this.props.collection && this.props.collection.title}</h2>
        
            <div className="items">
                {this.props.collection && this.props.collection.items.map(item => {
                    return <CollectionItem key={item.id} item={item} />
                })}
            </div>



            
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // collection: state.shop.collections.find(collection => collection.id === COLLECTION_TO_MAP[ownProps.match.params.collectionId]),
        collection: state.shop.collections ? state.shop.collections[ownProps.match.params.collectionId] : null,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchCollections: () => dispatch(actionCreators.fetchCollectionsStartAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)
