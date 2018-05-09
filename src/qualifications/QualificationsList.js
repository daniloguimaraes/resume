import React, { Component } from "react";

class QualificationsList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul>
        {this.props.data.map(function(qualification, index) {
          return (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: qualification }}
            />
          );
        })}
      </ul>
    );
  }
}

export default QualificationsList;
