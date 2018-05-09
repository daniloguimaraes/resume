import React, { Component } from "react";
import { I18n } from "react-i18next";

import Toolbar from "./toolbar/Toolbar";
import Personal from "./personal/Personal";
import Goals from "./goals/Goals";
import Education from "./education/Education";
import Professional from "./professional/Professional";
import Qualifications from "./qualifications/Qualifications";
import Events from "./events/Events";
import Projects from "./projects/Projects";

import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
import WebFont from "webfontloader";
import "./App.css";

WebFont.load({
  google: {
    families: ["Source Sans Pro", "sans-serif"]
  }
});

moragaTheme.baseFontSize = "18px";
moragaTheme.baseLineHeight = 1.56;
moragaTheme.baseScaleRatio = 2;
moragaTheme.headerWeight = 200;
moragaTheme.headerGrayValue = "15%";
moragaTheme.bodyWeight = 400;
moragaTheme.bodyBoldWeight = 700;
moragaTheme.bodyGray = "30%";

const typography = new Typography(moragaTheme);

typography.injectStyles();

class App extends Component {
  render() {
    return (
      <I18n ns="translations">
        {(t, { i18n }) => (
          <div className="App">
            <Toolbar i18n={i18n} />

            <br />

            <Personal i18n={i18n} />

            <br />

            <Goals i18n={i18n} />

            <br />

            <Education i18n={i18n} />

            <br />

            <Professional i18n={i18n} />

            <br />

            <Qualifications i18n={i18n} />

            <br />

            <Events i18n={i18n} />

            <br />

            <Projects i18n={i18n} />
          </div>
        )}
      </I18n>
    );
  }
}

export default App;
