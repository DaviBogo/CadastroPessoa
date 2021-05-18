import React from "react";
import { Switch, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro";

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Cadastro} />{" "}
      <Route path="/pessoa" exact component={Cadastro} />{" "}
    </Switch>
  );
}
