import React from 'react'

import './directory.styles.scss';
import {connect} from 'react-redux';
import MenuItem from '../menuItem/MenuItem';

class Directory extends React.Component{
  
    render(){

        return (
            <div className="directory-menu">
                {this.props.sections.map(elem => {
                    return (
                        <MenuItem key={elem.id} title={elem.title} img={elem.imageUrl} size={elem.size} link={elem.linkUrl}/>
                    )
                })}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections
  }
}


export default connect(mapStateToProps)(Directory)
