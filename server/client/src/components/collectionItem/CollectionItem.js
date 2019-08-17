import React from 'react'

import './CollectionItem.styles.scss';
import CustomButton from '../customButton/CustomButton';
import * as actionCreators from '../../actions/actionCreators';

import {connect} from 'react-redux';


const CollectionItem = (props) => {
    const { name, price, imageUrl} = props.item;

    return (
        <div className='collection-item'>
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => props.addItem(props.item)} inverted >Add to cart</CustomButton>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(actionCreators.addItem(item)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
 