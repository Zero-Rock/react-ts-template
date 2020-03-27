/**
 * Created by 枯荣<panjiankang@cai-inc.com> on 2020/03/06 2:10 下午.
 */
import React  from 'react';
import { Route, NavLink, routerRedux, Switch, Redirect } from 'dva/router';
import { RouterProps } from 'react-router';
import AppLayout from 'src/layout';
import Demo from 'src/pages/demo';

const { ConnectedRouter } = routerRedux;

const router = ({ history }: RouterProps) => {
  return (
   <ConnectedRouter history={history}>
     <AppLayout>
       <Switch>
         <Route path="/demo" component={Demo}/>
         <Redirect from="/" exact={true} to="/demo" />
       </Switch>
     </AppLayout>
   </ConnectedRouter>
  );
};

export default router;
