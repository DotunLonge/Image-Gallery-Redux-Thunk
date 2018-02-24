import React from 'react';
import {connect} from 'react-redux';
import Presenter from './presenter';
import {fetchImages, display, clearImage } from '../../actionCreators/images'; 
import './sidebar.css';

class SidebarContainerClass extends React.Component{
    componentWillMount(){
        this.props.fetchImages();
    }

    render(){
       const imageManager = this.props.imageManager;

        return (
            <div className="sidebar">
              { imageManager !== null ? <Presenter images = { imageManager.images } display = {this.props.display} /> : <p className="center">Loading...</p>  }
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        fetchImages: ()=> dispatch(fetchImages()),
        display: (Id)=>{
            dispatch(clearImage())
            setTimeout(()=>{
                dispatch(display(Id))
            },700)
        }
    }
}
const mapStateToProps = (state,props)=>{
    return {
        imageManager: state.imageManager
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainerClass);