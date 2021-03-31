import './App.css';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/dashboradopertions/CreateWallet';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux'
import store from './components/Store';
import UpdateWallet from './components/dashboard/dashboradopertions/UpdateWallet';
import Transactions from './components/transactions/Transaction';
import AddTransactions from './components/transactions/transactionoperations/AddTransaction';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createwallet" exact component={CreateWallet} />
          <Route path="/updatewallet/:id" exact component={UpdateWallet} />
          <Route path="/transactions/:id" exact component={Transactions} />
          <Route path="/trns/add/:id" exact component={AddTransactions} /> 
          <Route path="/" component={NotFound} />

      {/* 
     */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
