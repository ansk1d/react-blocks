import React, { Component } from 'react';
import './style.css';


class ReactComponent extends Component {
    render() {
        return(
            <div className='app'>
        <div className='mainBody'>
            <div className='nav'></div>
            <div className='main'>
                <div className='header'></div>
                <div className='continer'>
                    <div className='topContiner'>
                <div className='subContents'></div>
                <div className='subContents'></div>
                <div className='subContents'></div>
                    </div>
                <div className='advertisement'></div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
    
export default ReactComponent;