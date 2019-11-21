import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Second extends Component {
    constructor()
    {
        super();
        this.state={
            visibility:"hidden"
        }
    }

    cancel(e)
    {
        this.props.onSelectPage("first");
        e.preventDefault(); 
    }

    onSubmit(e)
    {        
        var data={
            "Name":this.refs.name.value,
            "Title": this.refs.title.value,
            "Comment":this.refs.comment.value
        }
        
        if(this.refs.name.value && this.refs.title.value && this.refs.comment.value)
        {            
            this.props.onSelectPage("third",data);
            e.preventDefault();
            return false;
        } 

        this.setState({visibility:"visible"});
        e.preventDefault();        
    }
  render() {          

    return (     
        
        <div class="row">
            <div class="col">
            <div id="alert alert-danger" class="alert alert-danger" style={{visibility:this.state.visibility}} role="alert">
                    All fields are required.
            </div>
      
      <form onSubmit={this.onSubmit.bind(this)}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" ref="name" id="name" aria-describedby="emailHelp" placeholder="Enter user name" />
            </div>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" ref="title" id="title" placeholder="Enter comment title" />
            </div>
            <div class="form-group">
                <label for="comment">Comment</label>
                <textarea class="form-control" id="comment" ref="comment" placeholder="Enter comment" />
            </div>

            <div class="text-right">
                <button type="button" onClick={this.cancel.bind(this)} class="btn btn-secondary">Cancel</button>
                &nbsp;
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
      </form>
    </div>
  </div>

    );
  }
}

export default Second;