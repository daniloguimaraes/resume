import React, { Component } from "react";
import { I18n } from "react-i18next";
import ProjectList from "./ProjectList";

class Projects extends Component {
  render() {
    return (
      <I18n ns="translations">
        {t => (
          <div>
            <h2>
              {t("projects.title")} <hr />
            </h2>

            <ProjectList data={t("projects.array", { returnObjects: true })} />
          </div>
        )}
      </I18n>
    );
  }
}

export default Projects;
