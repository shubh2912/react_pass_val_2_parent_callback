import React, { Component } from 'react';
import './css/App.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      Page: "first",
      data: null
    }
  }

  handlePage = (PageValue, dataval) => {

    this.setState({ Page: PageValue });

    if (dataval) {
      var data = [];
      if (this.state.data) {
        data = this.state.data;
      }
      data.push(dataval);
      this.setState({ data: data });
    }
  }

  render() {
    var currentPage;

    if (this.state.Page == "first") {
      currentPage = <div>{<First onSelectPage={this.handlePage} />}</div>
    }

    if (this.state.Page == "second") {
      currentPage = <div>{<Second onSelectPage={this.handlePage} />}</div>
    }

    if (this.state.Page == "third") {
      console.log(this.state.data[0]);
      currentPage = <div>{<Third onSelectPage={this.handlePage} data={this.state.data} />}</div>
    }


    return (
      <div>
        <header className="App-header">
          <center>
            <h1 className="App-title">Post Comments</h1>
          </center>
        </header>
        {currentPage}
      </div>
    );
  }
}

export default App;
