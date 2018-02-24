import React from 'react';

export default class PreviewPresenterClass extends React.Component{
    render(){
        return  <img src={this.props.image} alt="imageToDisplay"/>
    }

}