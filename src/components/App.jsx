import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import BugReporter from './BugReporter.jsx'

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
      showBugReporter: false
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.toggleBugReporter = this.toggleBugReporter.bind(this);
    this.addBug = this.addBug.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter });
  }

  toggleBugReporter(){
    this.setState({showBugReporter:!this.state.showBugReporter})
  }

  addBug(bug){
    this.setState({
      bugs:[...this.state.bugs, bug]
    })
  }

  render() {
    return (
      <div>
        <table>
          <Nav
            filterHandler={this.filterHandler}
          />
          {this.state.bugs.map((bug, i) => {
            if(this.state.filter==='None'){
              return <BugTile
                bug={bug}
                key={i}
              />
            }
            else if(bug.threatLevel===this.state.filter){
              return <BugTile
                bug={bug}
                key={i}
              />
            }
          })
          }
          <tfoot><tr><th onClick={this.toggleBugReporter}>Report Bug</th></tr></tfoot>
        </table>

        <BugReporter 
        show={this.state.showBugReporter} 
        toggle={this.toggleBugReporter}
        addBug={this.addBug}
        />
        
      </div>
      
    );
  }
}

export default App;
