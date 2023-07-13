import { Route, Router, Switch } from 'wouter';
import Layout from './components/layout/Layout';
import Payment from './routes/payment/Payment';
import Analytics from './routes/analytics/Analytics';

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={Analytics} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </Router>
    </Layout>
  );
}
