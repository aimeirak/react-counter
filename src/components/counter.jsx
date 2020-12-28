import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:0
    };
    render() { 
        return (
            <React.Fragment>
                <div className='container'>
                    <span className='badge badge-primary m-2'>{this.formatCount()}</span>
                    <button className='btn btn-secondary btn-sm m-2'>Increment</button>
                </div>
            </React.Fragment>
            
            );
    }

    formatCount(){
        const {count} = this.state;
        return count ===0 ? "zero" : count;
    }
}
 
export default Counter;