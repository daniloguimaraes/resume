import React, { Component } from "react";
import { I18n, Trans } from "react-i18next";

class Education extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div>
            <h2>
              {t("education.title")} <hr />
            </h2>

            <ul>
              <li>
                <b>2009-2014</b>: {t("education.graduation.title")},{" "}
                <a href={t("education.graduation.link")}>
                  <Trans i18nKey="education.graduation.institution" />
                </a>.
              </li>

              <li>
                <b>2016-2017</b>: {t("education.postGraduation.title")},{" "}
                <a href={t("education.postGraduation.link")}>
                  <Trans i18nKey="education.postGraduation.institution" />
                </a>.
              </li>
            </ul>
          </div>
        )}
      </I18n>
    );
  }
}

export default Education;
