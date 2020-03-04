import React from 'react';

const BugTile = (props) => (
  <tbody>
    <tr className="bugTile">
      <td>{props.bug.bugName}</td>
      <td>{props.bug.bugDescription}</td>
      <td>{props.bug.reportedBy}</td>
      <td>{props.bug.createdDate}</td>
      <td>{props.bug.assignedTo}</td>
      <td>{props.bug.threatLevel}</td>
    </tr>
  </tbody>
);

export default BugTile;
