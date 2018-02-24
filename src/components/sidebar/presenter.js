import React from 'react';

class SidebarPresenterClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const images=  this.props.images;

        const rows = images.map((image, index)=>{
            return <li key = { index } onClick = {()=>{ this.props.display(image.id) }}>
                    <img src={ image.url } alt={`imag-${index}`} />
                    <p>{ image.title }</p>
                </li>
        })

        return (<ul>{rows}</ul>)
    }
}


export default SidebarPresenterClass;