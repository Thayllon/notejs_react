import React from "react";

import { Header } from "../../components";
import withSettings from "./withSettings";

import "./settings.scss";

const themes = [
  { key: "defalt", label: "Padrão" },
  { key: "classic", label: "Clássico", navBar: { backgroundColor: "#795548"} },
  { key: "dark", label: "Dark", navBar: { backgroundColor: "#333333"} },
  { key: "purple", label: "Dark Purple", navBar: { backgroundColor: "#131339"} },
  { key: "light", label: "Light", navBar: { backgroundColor: "#FFF", color: "#212121" } }
];

const SettingsPage = ({ theme: selectedTheme, toggleTheme }) => (
  <div>
    <Header>Temas</Header>
        <div className="themes">
          {themes.map(theme => (
            <button
              key={theme.key}
              className="themes__item"
              style={theme.navBar}
              onClick={() => {
                toggleTheme(theme);
              }}
            >
              <p>
                {theme.label}
                {theme.key === selectedTheme.key && (
                  <i className="material-icons">check</i>
                )}
              </p>
            </button>
          ))}
        </div>
  </div>
);

export default withSettings(SettingsPage);