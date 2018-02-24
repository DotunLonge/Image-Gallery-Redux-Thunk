import React from 'react';
import {connect} from 'react-redux';
import Presenter from './presenter';
import './preview.css';

class PreviewContainerClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const imageManager = this.props.imageManager
        return (
            <div className = "preview">
            {imageManager ? 
                imageManager.currentlyDisplayed !== undefined ? 
                    imageManager.currentlyDisplayed !== "" ?
                        <Presenter image = { imageManager.currentlyDisplayed } /> 
                        : <div className="center"> Loading... </div>
                    : <div className="center"> Nothing To Show </div> 
                : <div className="center"> Loading... </div>
            }
               </div>
      )
    }
}


const mapStateToProps = (state,props)=>{
    return {
        imageManager: state.imageManager
    }
}

export default connect(mapStateToProps)(PreviewContainerClass);