import React from 'react'

import './PreviewCollection.styles.scss';

import CollectionItem from '../collectionItem/CollectionItem';

const PreviewCollection = (props) => {

    const {title, items} = props;
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, i) => i < 4).map((item) => {
                    return (
                        <CollectionItem key={item.id} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default PreviewCollection
