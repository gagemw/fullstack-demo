import React from 'react'

class BugReporter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignedTo: '',
      threatLevel: '',
      bugDescription: '',
      reportedBy: ''
    };
    this.clearState=this.clearState.bind(this)
    this.changeHandler=this.changeHandler.bind(this)
  }

  clearState(){
    this.setState({
      assignedTo: '',
      threatLevel: '',
      bugDescription: '',
      reportedBy: ''
    })
  }

  changeHandler(e){
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  render(){
    if(this.props.show){
    return(
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Reported By</th>
            <th>Assigned To</th>
            <th>Threat Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input id="bugDescription" onChange={(e)=>{this.changeHandler(e)}}></input></td>
            <td><input id="reportedBy" onChange={(e)=>{this.changeHandler(e)}}></input></td>
            <td><input id="assignedTo" onChange={(e)=>{this.changeHandler(e)}}></input></td>
            <td><input id="threatLevel" onChange={(e)=>{this.changeHandler(e)}}></input></td>
          </tr>
        </tbody>
        <tfoot><tr><th onClick={()=>{this.props.addBug(this.state), this.clearState(), this.props.toggle()}}>Submit Bug</th></tr></tfoot>
      </table> 
    )}
    return null;
  }

}

export default BugReporter