import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './gogo')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);
const Pedidos = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './pedidos')
);
const HistoricoDeCaixa = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './historico')
);
const Clientes = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './clientes')
);
const Caixa = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './caixa')
);
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './blank-page')
);

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
            <Route
              path={`${match.url}/gogo`}
              render={(props) => <Gogo {...props} />}
            />
            <Route
              path={`${match.url}/second`}
              render={(props) => <SecondMenu {...props} />}
            />
            <Route
              path={`${match.url}/pedidos`}
              render={(props) => <Pedidos {...props} />}
            />
            <Route
              path={`${match.url}/historico`}
              render={(props) => <HistoricoDeCaixa {...props} />}
            />
            <Route
              path={`${match.url}/clientes`}
              render={(props) => <Clientes {...props} />}
            />
            <Route
              path={`${match.url}/caixa`}
              render={(props) => <Caixa {...props} />}
            />
            <Route
              path={`${match.url}/blank-page`}
              render={(props) => <BlankPage {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
