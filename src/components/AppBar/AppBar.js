import React from "react";

import "./app-bar.scss";
import withSettings from "../../containers/Settings/withSettings";

const AppBar = ({ isLoading, saveHasError, onSaveRetry, onOpenMenu, theme }) => (
  <div className="app-bar" style={theme && theme.navBar}>
    <div className="app-bar__container">
      <button className="app-bar__action" onClick={onOpenMenu}>
        <i className="material-icons">menu</i>
      </button>
      <span className="app-bar__brand">Udemy React - Note.JS</span>
      {isLoading && (
        <button className="app-bar__action app-bar__action--rotation">
          <i className="material-icons">refresh</i>
        </button>
      )}
      {saveHasError && (
        <button className="app-bar__action app-bar__action--danger" onClick={onSaveRetry}>
          <i className="material-icons">cloud_off</i>
        </button>
      )}
    </div>
  </div>

);

export default withSettings(AppBar);