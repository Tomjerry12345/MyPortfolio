import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import DetailComponent from "./component/myportfolio/detail/DetailComponent";
import Main from "./Main";
import { AnimatePresence } from "framer-motion";
import { GetParams } from "./utils/GetParams";

class App extends React.Component {
  render() {
    return (
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/detail/:project/:id" component={GetParams} />
        </Switch>
      </AnimatePresence>
    );
  }
}

export default App;
