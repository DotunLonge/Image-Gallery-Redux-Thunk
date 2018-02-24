import React, {Component } from 'react';
import Sidebar from './components/sidebar/container';
import Preview from './components/preview/container';
import './app.css';

class App extends Component{
constructor(props){
    super(props);
    this.state = {}
}

render(){
    return(
        <div className="flex">
            <Sidebar/>
            <Preview/>
        </div>
    )
}

}

export default App;