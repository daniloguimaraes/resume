import React, { Component } from "react";
import { I18n } from "react-i18next";

class Personal extends Component {
  render() {
    return (
      <I18n ns="translations">
        {t => (
          <div className="personal">
            <h1>{t("personal.name")}</h1>

            <blockquote>
              <p>
                {t("personal.address.title")}
                <br />
                E-mail:{" "}
                <a href="mailto:guimaraes.djl@gmail.com">
                  guimaraes.djl@gmail.com
                </a>
                <br />
                Github:{" "}
                <a href="https://github.com/daniloguimaraes">daniloguimaraes</a>
                <br />
                LinkedIn: <a href="https://www.linkedin.com/in/danilo-guimar%C3%A3es-52a250a9/">Danilo Guimarães</a>
              </p>
            </blockquote>
          </div>
        )}
      </I18n>
    );
  }
}

export default Personal;
