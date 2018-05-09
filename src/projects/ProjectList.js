import React, { Component } from 'react';

class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <ul>
                {
                    this.props.data.map(function(project, index) {
                        let content = "<h4>"+ project.title + "</h4>"
                                + "<p>" + project.description + "</p>";

                        if (project.link) {
                            content += "<p> Link: <a href=\"" + project.link + "\">" + project.link + "</a></p>";
                        }

                        return <li key={index} dangerouslySetInnerHTML={{__html: content}}>
                        </li>
                    })
                }
            </ul>
        );
    }
}

export default ProjectList;