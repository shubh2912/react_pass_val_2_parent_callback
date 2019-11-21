import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class First extends Component {

    AddComment = (e) => {
        this.props.onSelectPage("second");
    }

    render() {
        return (
            <div class="row mb-4">
                <div class="col" style={{ margin: "50px" }}>
                    <button type="button" onClick={this.AddComment} class="btn btn-primary">Add Comment</button>
                </div>
            </div>
        );
    }
}

export default First;