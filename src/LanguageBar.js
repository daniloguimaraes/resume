import React, { Component } from 'react';

class LanguageBar extends Component {

    render() {
        return (
            <div class="language-bar">
            <Button onClick={() => i18n.changeLanguage('pt-BR')}>pt-BR</Button>
            <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
          </div>
        )
    }
}

export default LanguageBar;