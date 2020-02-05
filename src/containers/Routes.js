import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Notes from "./Notes/Notes";
import About from "./About/About";
import SettingsPage from "./Settings/SettingsPage";
import PageNotFound from "./PageNotFound/PageNotFound";

export const menu = [
  { icon: "note", label: "Notas", path: "/" },
  { icon: "settings", label: "Configurações", path: "/settings" },
  { icon: "info", label: "Sobre", path: "/about" },
];

const Routes = () => (
    <Switch>
      <Route path="/" exact component={Notes} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/about" component={About} />
      <Route component={PageNotFound} />
    </Switch>
  );

export default Routes;