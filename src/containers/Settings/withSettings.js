import React from "react";

import SettingsContext from "../Settings/SettingsContext";

const withSettings = Component => props => (
  <SettingsContext.Consumer>
    {(context) => 
      <Component {...props} {...context} />
    }
  </SettingsContext.Consumer>
);

export default withSettings;