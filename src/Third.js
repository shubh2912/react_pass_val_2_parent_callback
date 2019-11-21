import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Third extends Component {

    
    AddComment(e) 
    {
        
        this.props.onSelectPage("second");
    }
    
  render() {
    return (     
        
<div>
        <div class="row mb-4">
        <div class="col" style={{margin:"50px"}}>
            <button type="button" onClick={this.AddComment.bind(this)} class="btn btn-primary">Add Comment</button>
        </div>
    </div>
    {this.props.data.map((item)=>
        <div class="row mb-4">
            <div class="col">
                <div class="card">
                    <h6 class="card-header">{item.Name}</h6>
                        <div class="card-body">
                            <h5 class="card-title">{item.Title}</h5>
                                <p class="card-text">{item.Comment}</p>
                        </div>
                    </div>
            </div>
        </div> 
        )}
        </div> 
     
    );
  }
}

export default Third;