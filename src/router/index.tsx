import { BrowserRouter, Switch } from "react-router-dom";
import React, { Suspense } from "react";

import Login from "@/router/constans/login";
import NotFound from "@/router/constans/notFound";
import RouterAuth from "@/component/routeAuth";

const routes = [
  ...Login,
  ...NotFound
];

class BasicRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <RouterAuth config={routes} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default BasicRoute;