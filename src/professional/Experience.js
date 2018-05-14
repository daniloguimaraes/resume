import React, { Component } from "react";
import { I18n } from "react-i18next";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log(this.props.data);
    return (
      <I18n ns="translations">
        {t =>
          this.props.data.map(function(experience, index) {
            return (
              <div>
                <blockquote>
                  <p>
                    <b>{experience.duration}</b> - {experience.company}
                  </p>

                  <p style={{ fontSize: 16 + "px" }}>
                    <b>{t("professional.companyDescription")}</b>:{" "}
                    {experience.companyDescription}
                    <br />
                    <b>{t("professional.roles")}</b>: {experience.roles}
                    <br />
                    <b>{t("professional.mainActivities")}</b>:{" "}
                    {experience.mainActivities}
                  </p>
                </blockquote>
              </div>
            );
          })
        }
      </I18n>
    );
  }
}

export default Experience;
